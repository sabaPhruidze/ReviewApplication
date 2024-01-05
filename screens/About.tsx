import {View, Text} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../styles/Global';
const About = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.text}>
        "The Secret" is a transformative guide that explores the profound impact
        of thoughts and emotions on the course of our lives. Authored by Rhonda
        Byrne, this influential book delves into the concept of the law of
        attraction—a powerful principle suggesting that our thoughts have the
        ability to shape our reality.
      </Text>
      <Text style={[GlobalStyles.text, GlobalStyles.space]}>
        "The Secret" has resonated with millions worldwide, inspiring
        individuals to reevaluate their thought patterns and embrace a more
        positive outlook. It has become a beacon of hope for those seeking
        personal and professional transformation, offering a roadmap to harness
        the law of attraction for a fulfilling life.
      </Text>
    </View>
  );
};

export default About;
