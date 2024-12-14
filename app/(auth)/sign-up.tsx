import { ScrollView, View, Image, Text } from "react-native";
import { images, icons } from "@/constants";
import InputField from "@/components/InputField";

import { useState } from "react";

const SignUp = () => {

    const [ form, setForm ] = useState({
        name: "",
        email: "",
        password: ""
    });

    return (
        <ScrollView className="flex-1 bg-white">
            <View className='flex-1 bg-white'>
                <View className="relative w-full h-[250px]">
                    <Image source={ images.signUpCar} className="z-0 w-full h-[250px]"/>
                </View> 
                <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">Crie a sua conta</Text>
            </View>

            <View className="p-5">
                <InputField
                label="Name"
                placeholder="Digite o seu nome"
                icon={icons.person}
                value={form.name}
                onChangeText={(value) => setForm({ ...form, name: value })}
                />

            <InputField
            label="Email"
            placeholder="Digite o seu e-mail"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Digite a sua senha"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
            </View>
        </ScrollView>
    )
}

export default SignUp