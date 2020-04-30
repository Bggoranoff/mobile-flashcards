import React, { useEffect } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import reducers from './src/reducers';
import middleware from './src/middleware';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Main, MainView } from './src/components/Main';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import AddDeck from './src/components/AddDeck';
import { handleInitialData } from './src/actions';

const Drawer = createDrawerNavigator();

const store = createStore(reducers, middleware);

class Root extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="List">
          <Drawer.Screen options={{ drawerLabel: 'Your Decks', drawerIcon: () => <MaterialCommunityIcons name='cards-variant' /> }} name='List' component={Main} initialParams={{ name: 'DeckList' }} />
          <Drawer.Screen options={{ drawerLabel: 'Add Deck', drawerIcon: () => <AntDesign name='plus' /> }} name='AddDeck' component={MainView} initialParams={{ Cmp: AddDeck }} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  };
}

export default function App() {
  const ConnectedRoot = connect(mapStateToProps)(Root);
  return (
    <Provider store={store}>
      <ConnectedRoot />
    </Provider>
  );
}
