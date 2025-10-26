'use client'

import styled from "styled-components";
import Flex from "./components/Flex/page";
import Text from "./components/Text/page"
import Img from "./components/Img/page";
import Button from "./components/Button/page";
import Grid from "./components/Grid/page";

import { HiOutlinePencil } from "react-icons/hi2";
import { FiDelete } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import MapCenter from "./components/Map/page";
import { useState } from "react";

const HomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 740px;
`

const StyledSPrice = styled.div`
    display: ${props => props.display || 'flex'} ;
    height: 540px;
    background: #3A3C48;
`

const Home = () => {
  const [showP, setShowP] = useState(false);
  const [price, setPrice] = useState('0');

  const ChangeShow = () => {
        setShowP(showP ? false: true)
    }
  
    
  const ChangePrice = (a) => {
    
  }
  return(
    <HomeBlock>
      <MapCenter></MapCenter>
      <Flex display={showP ? 'none' : 'flex'} width='100%' height='20%' $background='#494F5D' $justify='space-around'>
            <Flex width='25%' height='60%' $justify='center' $alignI='center'>
                <Img $bradius='25px' $bcolor='#006EFF'></Img>
            </Flex>
            <Flex width='70%' direction='column' $justify='space-around'>
                <Flex height='45%' $alignI='center' $gap='10px'>
                    <Img $justify='center' width='15px' height='15px' $bradius='25px' $bcolor='#006EFF'><Text size='12px' color='white'>A</Text></Img>
                    <Flex>
                       <Text color='white'>
                            Томский государственный университет (ТГУ) (проспект Ленина, 36, Томск)
                        </Text> 
                    </Flex>
                    
                </Flex>
                <Flex height='45%' $alignI='center' $gap='10px'>
                    <Img $justify='center' width='15px' height='15px' $bradius='25px' $bcolor='#99FE28'><Text size='12px' color='black'>B</Text></Img>
                    <Flex>
                        <Text color='white'>
                            Томский государственный педагогический (ТГПУ) (улица Киевская, 60, Томск)
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
      <Flex display={showP ? 'none' : 'flex'} $gap='10px' direction='column' height='35%' width='100%' $background='#3A3C48' $alignI="center">
            <Flex height='45%' $justify="center" direction='column' $alignI="center" $gap='10px'>
                <Text color='white'>Цена пассажира:</Text>
                <Button $secondary $background="#99FE28" $backgroundchange="#81bc3eff" width="90%" $bradius="5px" height="80%"><Text color='black' size='24px'>300 ₽</Text></Button>
            </Flex>
            <Flex $gap='10px' height='60%' $justify="space-between" direction='column' $alignI="center" width="90%">
                <Text color='white'>Предложите свою цену: </Text>
                <Flex $gap='5px'>
                    <Flex direction='column' width="25%" $alignI="center">
                        <Button $secondary width="90%" $background="#99FE28" $backgroundchange="#81bc3eff" $bradius="5px" height="60px"><Text color='black' size='24px' >350 ₽</Text></Button>
                        <Text color='white'>83,2%</Text>
                        <Flex  width="90%" $bradius='5px' $justify="center" $background='#006FFF'><Text size='12px' color='white'>Надёжно</Text></Flex>
                    </Flex>
                    <Flex direction='column' width="25%" $alignI="center">
                        <Button $secondary width="90%" $background="#99FE28" $backgroundchange="#81bc3eff" $bradius="5px" height="60px"><Text color='black' size='24px' >350 ₽</Text></Button>
                        <Text color='white'>64,8%</Text>
                        <Flex width="90%" $bradius='5px' $justify="center" $background='#99FE28'><Text size='12px' color='black'>Оптимально</Text></Flex>
                    </Flex>
                    <Flex direction='column' width="25%" $alignI="center">
                        <Button $secondary width="90%" $background="#99FE28" $backgroundchange="#81bc3eff" $bradius="5px" height="60px"><Text color='black' size='24px' >350 ₽</Text></Button>
                        <Text color='white'>43,2%</Text>
                        <Flex width="90%" $bradius='5px' $justify="center" $background='#D9D9D9'><Text size='12px' color='black'>Рискованно</Text></Flex>
                    </Flex>
                    <Flex direction='column' width="25%" $alignI="center" >
                        <Button onClick={ChangeShow} $secondary width="90%" height='60px' $background="#99FE28" $backgroundchange="#81bc3eff" $bradius="5px"><Text color='black' size='24px' ><HiOutlinePencil /></Text></Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex height='45%' $justify="center" $alignI="center">
                <Button $secondary $background="#D9D9D9" $backgroundchange="#989898ff" width="90%" height="50%" $bradius="5px" $alignI="center"><Text color='black'>Закрыть</Text></Button>
            </Flex>
        </Flex>
      <StyledSPrice display={showP ? 'flex': 'none'}>
            <Flex $alignI='center' direction='column' $gap='30px'>
                    <Flex width='80%' $justify='flex-end' $gap='40px'>
                        <Text size='18px' color='white'>Укажите вашу цену</Text>
                        <Button onClick={ChangeShow}><Text size='25px' color='white'><RxCrossCircled /></Text></Button>
                    </Flex>
                    <Flex $borderbottom='1px solid white' $justify='center' width='60%'>
                        <Text size='36px' color='white'>{price}</Text>
                    </Flex>
                    <Button $secondary $background="#99FE28" $backgroundchange="#81bc3eff" width="80%" $bradius="5px" height="25%"><Text color='black' size='24px'>Готово</Text></Button>
                    <Grid width='98%' $gap='10px' $justify='center'>
                        <Button onClick={ChangePrice(1)} $bradius='10px' width='95px' height='45px' $secondary $background='#74757A' $backgroundchange='#6b6b6bff'><Text size='18px' color='white'>1</Text></Button>
                        <Button onClick={ChangePrice(2)} $bradius='10px' width='95px' height='45px' $secondary $background='#74757A' $backgroundchange='#6b6b6bff'><Text size='18px' color='white'>2</Text></Button>
                        <Button onClick={ChangePrice(3)} $bradius='10px' width='95px' height='45px' $secondary $background='#74757A' $backgroundchange='#6b6b6bff'><Text size='18px' color='white'>3</Text></Button>
                        <Button onClick={ChangePrice(4)} $bradius='10px' width='95px' height='45px' $secondary $background='#74757A' $backgroundchange='#6b6b6bff'><Text size='18px' color='white'>4</Text></Button>
                        <Button onClick={ChangePrice(5)} $bradius='10px' width='95px' height='45px' $secondary $background='#74757A' $backgroundchange='#6b6b6bff'><Text size='18px' color='white'>5</Text></Button>
                        <Button onClick={ChangePrice(6)} $bradius='10px' width='95px' height='45px' $secondary $background='#74757A' $backgroundchange='#6b6b6bff'><Text size='18px' color='white'>6</Text></Button>
                        <Button onClick={ChangePrice(7)} $bradius='10px' width='95px' height='45px' $secondary $background='#74757A' $backgroundchange='#6b6b6bff'><Text size='18px' color='white'>7</Text></Button>
                        <Button onClick={ChangePrice(8)}$bradius='10px' width='95px' height='45px' $secondary $background='#74757A' $backgroundchange='#6b6b6bff'><Text size='18px' color='white'>8</Text></Button>
                        <Button onClick={ChangePrice(9)} $bradius='10px' width='95px' height='45px' $secondary $background='#74757A' $backgroundchange='#6b6b6bff'><Text size='18px' color='white'>9</Text></Button>
                        <Button onClick={ChangePrice(0)} $bradius='10px' width='95px' height='45px' $secondary $background='#74757A' $backgroundchange='#6b6b6bff'><Text size='18px' color='white'>0</Text></Button>
                        <Button $bradius='10px' width='95px' height='45px' $secondary><Text size='24px' color='white'><FiDelete/></Text></Button>
                    </Grid>
                    <Flex height='20px'></Flex>
            </Flex>
        </StyledSPrice>
    </HomeBlock>
  )
}

export default Home