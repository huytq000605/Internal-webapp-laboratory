/* eslint-disable no-underscore-dangle */
import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import {
	Accordion,
	Alert,
	Button,
	Card,
	Col,
	Container,
	OverlayTrigger,
	Row,
	Tooltip,
} from "react-bootstrap";
import dayjs from "dayjs";
import {
	CreateDutyInput,
	Duty,
	DutyDayListDocument,
	DutyDayListQuery,
	NewSubscriberDocument,
	NewSubscriberSubscriptionResult,
	NewUnsubscriberDocument,
	NewUnsubscriberSubscriptionResult,
	useDutyDayListQuery,
	useRegisterDutyMutation,
	useUnsubribeDutyMutation,
} from "generated/graphql";
import { ResponsiveContext, UserContext } from "App";
import "rc-slider/assets/index.css";
import TimeRange from "shared/time-range";
import setTimeInDate from "shared/times";
import { compact, flatMap } from "lodash";
import RegisterItem from "../register-item/RegisterItem";
import DutyRegisterForm, {
	TimeInterval,
} from "../duty-register-form/DutyRegisterForm";
import "./DutyDayCard.scss";

const mergeRegisterdInterval = (
	input: Duty[] = []
): { start: Date; end: Date; registers: string[] }[] => {
	const data = input.map((duty) => {
		return duty.times?.map((time) => {
			return {
				start: time.start,
				end: time.end,
				registers: [duty.subscriberName],
			};
		});
	});

	const proccessedData = flatMap(compact(data));

	proccessedData.sort(
		(a, b) => dayjs(a.start).unix() - dayjs(b.start).unix()
	);

	const result: { start: Date; end: Date; registers: string[] }[] = [];

	result.push(proccessedData[0]);

	for (let i = 1; i < proccessedData.length; i++) {
		result.push(proccessedData[i]);
	}

	return compact(result);
};

interface Props {
	// day of weeks that this component will display on
	targetDay?: dayjs.Dayjs;
	currentDate?: Date;
	morningTimer?: TimeInterval;
	afternoonTimer?: TimeInterval;
}

const DutyDayItem: React.FC<Props> = ({
	targetDay = dayjs(),
	currentDate = new Date(),
	morningTimer = {
		start: { hour: 8, minute: 30 },
		end: { hour: 11, minute: 30 },
	},
	afternoonTimer = {
		start: { hour: 13, minute: 30 },
		end: { hour: 19, minute: 0 },
	},
}) => {
	const user = useContext(UserContext);
	const isMobileOrTablet = useContext(ResponsiveContext)?.isMobileOrTablet;

	const [registerMode, setRegisterMode] = useState(false);

	const { data, subscribeToMore } = useDutyDayListQuery({
		variables: { date: targetDay },
	});

	const isSubscribed = data?.dutiesByDate.some(
		(duty) => duty.subscriberId === user?.googleId
	);

	const isPassed = dayjs(targetDay).isBefore(dayjs(currentDate), "date");

	const isNow = dayjs(targetDay).isSame(dayjs(currentDate), "date");

	const handleOnRegisterClick = () => {
		setRegisterMode(true);
	};

	const exitRegisterMode = () => {
		setRegisterMode(false);
	};

	const [unsubscribeDuty] = useUnsubribeDutyMutation();

	const [registerDuty, { error }] = useRegisterDutyMutation({
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		onError() {},
		update: (cache, { data: dataResponse }) => {
			if (!dataResponse) return;
			const cachedData = cache.readQuery<DutyDayListQuery>({
				query: DutyDayListDocument,
				variables: { date: targetDay.toDate() },
			});
			if (!cachedData) return;
			cache.writeQuery<DutyDayListQuery>({
				query: DutyDayListDocument,
				variables: { date: targetDay.toDate() },
				data: {
					dutiesByDate: [
						...cachedData.dutiesByDate,
						dataResponse.registerDuty,
					],
				},
			});
		},
		onCompleted() {
			exitRegisterMode();
		},
	});

	const handleOnRegister = (times: CreateDutyInput["times"]) => {
		registerDuty({
			variables: { input: { times } },
		});
	};

	const handleOnUnsubscribe = () => {
		unsubscribeDuty({
			variables: { date: targetDay.toDate() },
			update(cache, { data: dataResponse }) {
				if (!dataResponse) return;
				const cachedData = cache.readQuery<DutyDayListQuery>({
					query: DutyDayListDocument,
					variables: { date: targetDay.toDate() },
				});
				if (!cachedData) return;

				cache.writeQuery<DutyDayListQuery>({
					query: DutyDayListDocument,
					variables: { date: targetDay.toDate() },
					data: {
						dutiesByDate: cachedData.dutiesByDate.filter((duty) => {
							return !(
								dayjs(duty.date).isSame(targetDay, "date") &&
								duty.subscriberId ===
									dataResponse.unsubcribeDuty.subscriberId
							);
						}),
					},
				});
			},
		});
	};

	useEffect(() => {
		subscribeToMore({
			document: NewSubscriberDocument,
			updateQuery: (
				prev,
				{
					subscriptionData,
				}: {
					subscriptionData: Pick<
						NewSubscriberSubscriptionResult,
						"data"
					>;
				}
			) => {
				if (
					!subscriptionData.data ||
					prev.dutiesByDate.some(
						(duty) =>
							duty._id ===
							subscriptionData.data?.newSubscriber._id
					) ||
					subscriptionData.data.newSubscriber.subscriberId ===
						user?.googleId
				)
					return prev;

				return {
					dutiesByDate: [
						...prev.dutiesByDate,
						subscriptionData.data.newSubscriber,
					],
				};
			},
		});
	}, [subscribeToMore, user]);

	useEffect(() => {
		subscribeToMore({
			document: NewUnsubscriberDocument,
			updateQuery: (
				prev,
				{
					subscriptionData,
				}: {
					subscriptionData: Pick<
						NewUnsubscriberSubscriptionResult,
						"data"
					>;
				}
			) => {
				if (
					!subscriptionData.data ||
					!prev.dutiesByDate.some(
						(duty) =>
							duty._id ===
							subscriptionData.data?.newUnsubscriber._id
					) ||
					subscriptionData.data.newUnsubscriber.subscriberId ===
						user?.googleId
				)
					return prev;

				return {
					dutiesByDate: prev.dutiesByDate.filter(
						(duty) =>
							duty._id !==
							subscriptionData.data?.newUnsubscriber._id
					),
				};
			},
		});
	}, [subscribeToMore, user]);

	const getIntervals = () => {
		if (!data?.dutiesByDate) return [];
		const result = mergeRegisterdInterval(data?.dutiesByDate);

		return result.map((item) => ({
			start: item.start,
			end: item.end,
			icon: (
				<div>
					{item.registers.map((register) => (
						<span key={register}>
							<OverlayTrigger
								overlay={
									<Tooltip id={Math.random().toString()}>
										{register}
									</Tooltip>
								}
							>
								<i className="bi bi-bookmark-star" />
							</OverlayTrigger>
						</span>
					))}
				</div>
			),
		}));
	};

	const CustomButton: React.FC = ({ children, ...otherProps }) => (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<Button size="sm" variant="link" {...otherProps}>
			{children}
		</Button>
	);

	const hasRegister = !!data?.dutiesByDate.length;

	return (
		<Card className="my-3">
			<Card.Header
				role="heading"
				className={clsx({
					"card__header--active ": isNow,
					"d-flex justify-content-between flex-wrap": true,
				})}
			>
				<div className="col-12 d-flex justify-content-between">
					<div>{targetDay.format("dddd, DD-MM-YYYY")}</div>
					<div>
						{isSubscribed && (
							<Button
								disabled={isPassed}
								size="sm"
								variant="warning"
								onClick={handleOnUnsubscribe}
							>
								Hủy đăng kí
							</Button>
						)}
						{!isSubscribed && !isPassed && !isNow && (
							<Button
								disabled={registerMode}
								size="sm"
								className="ml-1"
								onClick={handleOnRegisterClick}
							>
								Đăng kí
							</Button>
						)}
					</div>
				</div>

				{registerMode && (
					<div className="col-12">
						<DutyRegisterForm
							error={error}
							timeInterval={30}
							morningTimer={morningTimer}
							afternoonTimer={afternoonTimer}
							targetDate={targetDay.toDate()}
							onCancel={exitRegisterMode}
							onSubmit={handleOnRegister}
						/>
					</div>
				)}
			</Card.Header>
			<Card.Body className={clsx(hasRegister && "pl-1")}>
				{!hasRegister && (
					<Alert variant="info">
						<p>Không có người trực</p>
					</Alert>
				)}
				{hasRegister && (
					<Row className="flex-column m-0">
						<h6 className="ml-2">Biểu đồ trực</h6>

						<div className="pl-3 pt-4 pb-6 duty-chart">
							<Container>
								<TimeRange
									isMobileOrTablet={isMobileOrTablet}
									intervals={getIntervals()}
									interval={30}
									min={setTimeInDate(targetDay, 8, 30)}
									max={setTimeInDate(targetDay, 19, 0)}
								/>
							</Container>
						</div>
						<Accordion>
							<Accordion.Toggle as={CustomButton} eventKey="1">
								Chi tiết
							</Accordion.Toggle>
							<Accordion.Collapse eventKey="1">
								<section>
									{data?.dutiesByDate
										.filter((day) =>
											dayjs(targetDay).isSame(
												dayjs(day.date),
												"date"
											)
										)
										.map((duty) => (
											<Col
												key={duty._id}
												className="m-2 flex-grow-1"
												xs={12}
												md={10}
											>
												<RegisterItem
													times={duty.times}
													active={
														duty.subscriberId ===
														user?.googleId
													}
													avatar={
														duty.subscriberAvatar ||
														undefined
													}
													name={duty.subscriberName}
												/>
											</Col>
										))}
								</section>
							</Accordion.Collapse>
						</Accordion>
					</Row>
				)}
			</Card.Body>
		</Card>
	);
};

export default DutyDayItem;
