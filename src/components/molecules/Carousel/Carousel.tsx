import React from "react";
import { Image, View } from "react-native";
import { COLORS, styles } from "../../../styles";
import Carousel from 'react-native-snap-carousel';
import { Label } from "../../atoms";

export default function MyCarousel (){

    const renderItem = ({item, index}: {item: any, index: number}) => {
        return (
            <View style={{backgroundColor: COLORS.WHITE, borderRadius: 20, height: '100%', width: '100%', padding: 5, display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
                {typeof item === 'string' ? <Label label={item} size="M" color={COLORS.BLACK}/> : item}
            </View>
        );
    }
    return (
        <View style={{backgroundColor: COLORS.PRIMARY_BLUE, height: 200, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{height: 122, marginTop: 20}}>
                <Carousel
                    data={[<Image source={require('../../../assets/sg_logo.png')} style={styles.app({}).carouselImage} />, <Image source={require('../../../assets/select_it_logo.png')} style={styles.app({}).mediumImage}/>]}
                    renderItem={(props) => renderItem(props)}
                    sliderWidth={400}
                    itemWidth={290}
                    layout={"default"}
                    enableSnap
                />
            </View>
        </View>
    );
}