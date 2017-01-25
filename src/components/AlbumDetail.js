import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailStyle,
    textContainer,
    thumbnailContainerStyle,
    titleTextStyle,
    imageStyle
   } = styles;

  return (<Card>
    <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={textContainer}>
          <Text style={titleTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
    </CardSection>

    <CardSection>
      <Image style={imageStyle} source={{ uri: image }} />
    </CardSection>

    <CardSection>
      <Button onPress={() => Linking.openURL(url)}>
        Buy Now
      </Button>
    </CardSection>
  </Card>);
};

const styles = {
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
