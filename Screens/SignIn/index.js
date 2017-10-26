/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
  Button,
  Container,
  Content,
  Icon,
  Item,
  Input,
  Text,
} from 'native-base';

import styles from './style';
import logo from '../images/logo-kitchen-sink.png';
import Home from '../Home'
class SignIn extends Component {
  static propTypes = {
    navigation: PropTypes.object,    
  }
  constructor(props) {
    super(props);
    this.redirectToHome = this.redirectToHome.bind(this);
    
  }
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Content padder style={styles.contentWrapper}>
          <View style={styles.logoWrapper}>
            <ImageBackground source={logo} style={styles.logo}/>
          </View>
          <Item style={styles.itemWrapper}>
            <Icon name='person' style={styles.icons} />
            <Input
              placeholder='用户名'
              placeholderTextColor={'white'}
              selectionColor={'white'}
              style={styles.inputs}
            />
          </Item>
          <Item style={styles.itemWrapper}>
            <Icon name='lock' style={styles.icons} />
            <Input
              placeholder='密码'
              secureTextEntry={true}
              placeholderTextColor={'white'}
              selectionColor={'white'}
              style={styles.inputs}
            />
          </Item>
          <View style={styles.linkBtnWrapper}>
            <Button
              transparent
              style={styles.linkBtn}
              onPress={this.redirectToResetPwd}
            >
              <Text style={styles.linkBtnTxt}>忘记密码?</Text>
            </Button>
          </View>
          <View style={styles.signBtnWrapper}>
            <Button
              style={styles.signBtn}
              onPress={this.redirectToHome}
            >
              <Text style={styles.btnText}>登 录</Text>
            </Button>
          </View>
          <View style={styles.noSignupWrapper}>
            <Text style={styles.linkBtnTxt}>还没有注册？</Text>
            <TouchableOpacity
              
            >
              <Text style={styles.linkBtnTxt}>点击注册</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }

  redirectToHome() {
    const { navigation } = this.props;
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
      ],
    });
    navigation.dispatch(resetAction);
  }

}

export default SignIn;