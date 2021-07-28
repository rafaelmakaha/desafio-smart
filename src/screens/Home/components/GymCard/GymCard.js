import React from 'react';
import parse from 'html-react-parser';
import { COLORS } from 'settings';
import { IMAGES } from 'settings/images';
import { Container, Description, Divider, GymName, Icon, InfoTitle, Status, WrapperIcons, WrapperInfo, WrapperSchedule } from './style';

const GymCard = ({gym}) => {

    const hasMask = {
        'recommended': () => (
            <Icon src={IMAGES.recommendedMask}/>
        ),
        'required': () => (
            <Icon src={IMAGES.requiredMask}/>
        )
    }

    const hasTowel = {
        'recommended': () => (
            <Icon src={IMAGES.recommendedTowel}/>
        ),
        'required': () => (
            <Icon src={IMAGES.requiredTowel}/>
        )
    }

    const hasFountain = {
        'partial': () => (
            <Icon src={IMAGES.partialFountain}/>
        ),
        'not_allowed': () => (
            <Icon src={IMAGES.forbiddenFountain}/>
        )
    }

    const hasLockerRoom = {
        'allowed': () => (
            <Icon src={IMAGES.requiredLockerRomm}/>
        ),
        'partial': () => (
            <Icon src={IMAGES.partialLockerRoom}/>
        ),
        'closed': () => (
            <Icon src={IMAGES.forbiddenLockerRoom}/>
        )
    }

    const closed = () => (
        <>
            <Status color={COLORS.red}>Fechado</Status>
            <GymName>{gym.title}</GymName>
            {
                !!gym.street && <Description>{`${gym.street},${gym.region},${gym.city_name} - ${gym.uf}`}</Description>
            }
            {
                !!gym.content && <Description>{parse(gym.content)}</Description>
            }
        </>
    )

    const opened = () => (
        <>
            <Status color={COLORS.green}>Aberto</Status>
            <GymName>{gym.title}</GymName>
            <Description>{parse(gym.content)}</Description>
            <Divider/>
            <WrapperIcons>
                {
                    !!gym.mask && hasMask[gym.mask]()
                }
                {
                    !!gym.towel && hasTowel[gym.towel]()
                }
                {
                    !!gym.fountain && hasFountain[gym.fountain]()
                }
                {
                    !!gym.locker_room && hasLockerRoom[gym.locker_room]()
                }
            </WrapperIcons>
            <WrapperSchedule>
                {
                    gym.schedules.map((schedule) => (
                        <WrapperInfo>
                            <InfoTitle>{schedule.weekdays}</InfoTitle>
                            <Description>{schedule.hour}</Description>
                        </WrapperInfo>
                    ))
                }
            </WrapperSchedule>
        </>
    )

    return (
        <>
         <Container>
                {
                 !!gym.opened ?
                    opened()
                    :
                    closed()
                }
        </Container>
        </>
    );
};

export default GymCard;