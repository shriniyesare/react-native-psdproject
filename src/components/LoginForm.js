import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginForm extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  render () {
    return (
      <View style={styles.container}>

        {!!this.state.nameError && (
          <Text style={{ color: "red" }}>{this.state.nameError}</Text>
        )}

        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Username"
        onChangeText={username => this.setState({ username })} value={this.state.username}>
        </TextInput>

        <TextInput style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
        placeholder="Password" secureTextEntry={true}
        onChangeText={password => this.setState({ password })} value={this.state.password}>
        </TextInput>
        <TouchableOpacity style={styles.button} onPress={() => {
          if (this.state.username.trim() === "") {
            this.setState(() => ({ nameError: "First name required." }));
          }
          else if (this.state.password.trim() === "") {
            this.setState(() => ({ nameError: "Password required." }));
          }
          else {
            this.setState(() => ({ nameError: null }));
            Actions.home({username: this.state.username})
          }
        }}>

          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "#eceff1",
    //flexGrow: 1,
    //alignItems: "center",
    // justifyContent: "center",
    // alignItems: "flex-end",
  },
  inputBox: {
    width: 300,
    fontSize: 18,
    color: "#4e342e",
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 13,
    marginBottom: 20,
  },
  button : {
    backgroundColor: "#0288d1",
    borderRadius: 25,
    marginVertical: 20,
    paddingHorizontal: 16,
    paddingVertical: 13,
    width: 300,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '500',
    color: "#efebe9",
    textAlign: "center",
  }
});