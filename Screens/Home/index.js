/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Styles from './style';

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,    
  }
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>EDUAPP</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


