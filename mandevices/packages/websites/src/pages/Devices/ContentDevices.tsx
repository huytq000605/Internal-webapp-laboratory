import Slide from 'blocks/Slide2';
import React, { useParams } from 'react-router-dom';
import Loading from 'shared/loading/Loading';
import { useDevicesQuery } from '../../generated/graphql';
import {
    Content,
    ContentTitle,
    DeviceList,
    DeviceItem,
    DeviceName,
    Info,
} from './Devices.styled';

const ContentDevices = () => {
    const { data, loading } = useDevicesQuery();
    const valuePath = useParams<{ category: string }>();
    const dataDevice = data?.deviceCategories?.filter((deviceCategory) => {
        return (
            deviceCategory?.devices?.[0]?.category?.name === valuePath.category
        );
    });
    return (
        <Content>
            {loading && <Loading />}
            {dataDevice && (
                <>
                    {valuePath.category && (
                        <ContentTitle>
                            {valuePath.category && (
                                <h2>
                                    Một số thiết bị
                                    <span> {valuePath.category}</span>
                                </h2>
                            )}
                        </ContentTitle>
                    )}
                    <DeviceList>
                        {dataDevice?.[0]?.devices?.map((device) => {
                            return (
                                <DeviceItem key={device?.id}>
                                    <Slide
                                        images={device?.avatar}
                                        caption={
                                            <Info>
                                                <DeviceName>
                                                    {device?.name}
                                                </DeviceName>
                                                <DeviceName>
                                                    {device?.model}
                                                </DeviceName>
                                            </Info>
                                        }
                                    />
                                </DeviceItem>
                            );
                        })}
                    </DeviceList>
                </>
            )}
        </Content>
    );
};

export default ContentDevices;
