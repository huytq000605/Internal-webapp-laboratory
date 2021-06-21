import clsx from "clsx";
import { TimeIntervalInput } from "generated/graphql";
import React from "react";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import TimeRange from "shared/time-range";
import "./styles/register-item.scss";

interface Props {
	active?: boolean;
	avatar?: string;
	name?: string;
	times?: TimeIntervalInput[] | null;
}

const RegisterItem: React.FC<Props> = ({
	active,
	avatar,
	name,
	times = [],
}) => {
	return (
		<section className="d-flex align-items-center">
			<div
				className={clsx(
					"d-flex align-items-center register__info",
					active && "border-primary"
				)}
			>
				<OverlayTrigger
					overlay={<Tooltip id="register_name">{name}</Tooltip>}
				>
					<Image
						className={clsx(
							"register__avatar",
							active && "register__avatar-active"
						)}
						src={avatar}
						roundedCircle
					/>
				</OverlayTrigger>
				<p
					className={clsx(
						"mb-0 ml-1 register__name",
						active && "register__name-active"
					)}
				>
					{name}
				</p>
			</div>
			<div className="flex-grow-1  d-flex">
				{times &&
					times.map((time) => (
						<div
							key={time.end.toString() + time.start.toString()}
							className="w-100 ml-4 mr-2"
						>
							<TimeRange
								min={time.start}
								max={time.end}
								onlyBounded
							/>
						</div>
					))}
			</div>
		</section>
	);
};

export default RegisterItem;
