import React from "react";
import {
View,
Text,
SafeAreaView,
TextInput,
ScrollView
} from 'react-native';
 import AppPro from "./AppPro";
import FlatCard from "./components/flatCard";
import FancyCards from "./components/flatCard/fancyCards";
import ActionCard from "./components/flatCard/actionCard";
import ContactList from "./components/flatCard/contactList";
import FoodCard from "./components/flatCard/foodCards";

const App=()=>{
return (  
    
    <View>
      <ScrollView>
      <FlatCard/>
      <ContactList/>
      <FoodCard/>
      </ScrollView>
    </View>
    
)
}
export default App;