import React from 'react';
import { IMAGES } from 'settings/images';
import { Container } from './style';
import SubtitleItem from './SubtitleItem/SubtitleItem';


const Subtitle = () => {
    const maskItems = [
        { image: IMAGES.requiredMask, message: "Obrigatório" },
        { image: IMAGES.recommendedMask, message: "Recomendado" },
    ]

    const towelItems = [
        { image: IMAGES.requiredTowel, message: "Obrigatório" },
        { image: IMAGES.recommendedTowel, message: "Recomendado" },
    ]

    const waterItems = [
        { image: IMAGES.partialFountain, message: "Parcial" },
        { image: IMAGES.forbiddenFountain, message: "Proibido" },
    ]

    const lockerRoomItems = [
        { image: IMAGES.requiredLockerRomm, message: "Liberado" },
        { image: IMAGES.partialLockerRoom, message: "Parcial" },
        { image: IMAGES.forbiddenLockerRoom, message: "Fechado" },
    ]

    return (
        <Container>
            <SubtitleItem title="Máscara" items={maskItems} />
            <SubtitleItem title="Toalha" items={towelItems} />
            <SubtitleItem title="Bebedouro" items={waterItems} />
            <SubtitleItem title="Vestiários" items={lockerRoomItems} />
        </Container>
    );
};

export default Subtitle;