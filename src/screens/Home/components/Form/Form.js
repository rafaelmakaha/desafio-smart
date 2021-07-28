import React from 'react';
import { IMAGES } from 'settings/images';
import Checkbox from '@material-ui/core/Checkbox';
import { Btn, Container, GymCount, Icon, IconText, Question, RadioButton, Text, WrapperBottom, WrapperButton, WrapperClosedGym, WrapperGymCount, WrapperHeader, WrapperRadioButton, WrapperRow } from './style';
import { COLORS } from 'settings';

const Form = (props) => {
    return (
        <>
            <Container>
                <WrapperHeader>
                    <Icon src={IMAGES.iconHour}/>
                    <IconText>Horário</IconText>
                </WrapperHeader>
                <Question>Qual período quer treinar?</Question>
                <WrapperRow>
                    <WrapperRadioButton>
                        <RadioButton 
                            checked={props.period === 'manha'}
                            onChange={props.handleSchedule}
                            value='manha'
                        />
                        <Text>Manhã</Text>
                    </WrapperRadioButton>
                    <Text>06:00 às 12:00</Text>
                </WrapperRow>
                <WrapperRow>
                    <WrapperRadioButton>
                        <RadioButton 
                            checked={props.period === 'tarde'}
                            onChange={props.handleSchedule}
                            value='tarde'
                        />
                        <Text>Tarde</Text>
                    </WrapperRadioButton>
                    <Text>12:01 às 18:00</Text>
                </WrapperRow>
                <WrapperRow>
                    <WrapperRadioButton>
                        <RadioButton 
                            checked={props.period === 'noite'}
                            onChange={props.handleSchedule}
                            value='noite'
                        />
                        <Text>Noite</Text>
                    </WrapperRadioButton>
                    <Text>18:01 às 23:00</Text>
                </WrapperRow>
                <WrapperBottom>
                    <WrapperClosedGym>
                        <Checkbox checked={props.closed} onChange={props.handleClosed}/>
                        <Text>Exibir unidades fechadas</Text>
                    </WrapperClosedGym>
                    <WrapperGymCount>
                        <Text>Resultados encontrados: </Text>
                        <GymCount>{props?.gymCount?? 0}</GymCount>
                    </WrapperGymCount>
                </WrapperBottom>
                <WrapperButton>
                    <Btn color={COLORS.yellow} onClick={props.search}>Encontrar unidade</Btn>
                    <Btn onClick={props.clear}>Limpar</Btn>
                </WrapperButton>
            </Container>
        </>
    );
};

export default Form;