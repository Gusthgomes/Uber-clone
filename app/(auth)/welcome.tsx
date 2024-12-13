import CustomButton from "@/components/CustomButton"
import { onboarding } from "@/constants"
import { router } from "expo-router"
import { useRef, useState } from "react"
import { Text, TouchableOpacity, View, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import Swiper from "react-native-swiper"

const OnBoarding = () => {

    const swiperRef = useRef<Swiper>(null);

    const [activenIdex, setActiveIndex] = useState(0);
    const isLastSlide = activenIdex === onboarding.length - 1;

    return (
        <SafeAreaView className="flex h-full items-center justify-between bg-white">
            <TouchableOpacity className="w-full flex justify-end items-end p-5" onPress={ () => {
                router.replace('/(auth)/sign-up')
            }}>
                <Text className="text-black text-md font-JakartaBold">Skip</Text>
            </TouchableOpacity>

            <Swiper 
                ref={ swiperRef } 
                loop={ false } 
                dot={
                    <View className="w-[32px] h-[4px] max-1 bg-[#E2E8F0] rounded-full"/>
                }
                activeDot={
                    <View className="w-[32px] h-[4px] max-1 bg-[#0286FF] rounded-full"/>
                }
                onIndexChanged={ (index) => setActiveIndex(index) }
                >
                    { onboarding.map( (item) => (
                        <View
                        className="flex items-center justify-center p-5"
                        key={item.id}>
                            <Image source={item.image} className="w-full h-[350px]"/>
                            <View className="flex flex-row items-center justify-center w-full mt-10">
                                <Text className="text-black text-3xl font-bold mx-10 text-center">{item.title}</Text>
                            </View>
                            <Text className="text-sm font-JakartaSemiBold text-center text-[#858585] mx-10 mt-2 mb-20">{item.description}</Text>
                        </View>
                    ))}
                </Swiper>

                <CustomButton 
                    title={ isLastSlide ? "Vamos nessa!" : "Próximo"}
                    className="w-11/12 mt-10"
                    onPress={() => {
                        if(isLastSlide) {
                            router.replace('/(auth)/sign-up')
                        } else {
                            swiperRef.current?.scrollBy(1)
                        }
                    }}
                />
        </SafeAreaView>
    )
}

export default OnBoarding