import React, { useRef } from 'react';
import { Image, View } from 'react-native';
import { COLORS, styles } from '../../../styles';
import Carousel from 'react-native-snap-carousel';
import { Label } from '../../atoms';

const data = [
  <Image
    source={require('../../../assets/sg_logo.png')}
    style={styles.app({}).carouselImage}
  />,
  <Image
    source={require('../../../assets/select_it_logo.png')}
    style={styles.app({}).mediumImage}
  />,
];

export default function MyCarousel() {
  const carouselRef = useRef<Carousel<any>>(null);
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View style={styles.app({}).carouselItemContainer}>
        {typeof item === 'string' ? (
          <Label label={item} size="M" color={COLORS.BLACK} />
        ) : (
          item
        )}
      </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: COLORS.PRIMARY_BLUE,
        height: 200,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={styles.app({}).carouselContainer}>
        <Carousel
          data={data}
          renderItem={(props) => renderItem(props)}
          sliderWidth={400}
          itemWidth={290}
          layout={'default'}
          enableSnap
          ref={carouselRef}
        />
      </View>
    </View>
  );
}
