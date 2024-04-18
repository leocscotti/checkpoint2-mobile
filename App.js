import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddProductScreen from './src/telas/AddProductScreen.jsx';
import ListProductsScreen from './src/telas/ListProductScreen.jsx';
import DeleteProductScreen from './src/telas/DeleteProductScreen.jsx';
import AboutScreen from './src/telas/AboutScreen.jsx';
import { ProdutosContext } from './src/context/ProdutosContext.jsx'; 

const Stack = createStackNavigator();

const pessoa1 = {
  nome: 'Leonardo Scotti',
  rm: 'RM550769',
  foto: require('./assets/leo-foto.jpg')
};

const pessoa2 = {
  nome: 'Eduardo Violante',
  rm: 'RM550364',
  foto: require('./assets/edu-foto.jpg')
};

const App = () => {
  return (
    <NavigationContainer>
      <ProdutosContext.Provider value={{ pessoa1, pessoa2 }}> 
        <Stack.Navigator initialRouteName="AddProduct">
          <Stack.Screen name="AddProduct" component={AddProductScreen} />
          <Stack.Screen name="ListProducts" component={ListProductsScreen} />
          <Stack.Screen name="DeleteProduct" component={DeleteProductScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </ProdutosContext.Provider> 
    </NavigationContainer>
  );
}

export default App;
