import React from 'react';
import { Image, Text, Title, Wrapper, WrapperInfo } from './style';

const SubtitleItem = (props) => {
    return (
        <Wrapper>
            <Title>{props?.title}</Title>
            <WrapperInfo>
                {
                    props?.items?.map((item,index) => (
                        <Wrapper key={index}>
                            <Image src={item.image}/>
                            <Text>{item.message}</Text>
                        </Wrapper>
                    ))
                }
            </WrapperInfo>
        </Wrapper>
    );
};

export default SubtitleItem;