import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MyStatusBar from '../MyStatusBar';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <MyStatusBar />
      <Tabs
        sceneContainerStyle={{marginTop:30}}
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Sports"
          options={{
            title: 'Sports',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'trophy' : 'trophy-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Portfolio"
          options={{
            title: 'Portfolio',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'briefcase' : 'briefcase-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Wallet"
          options={{
            title: 'Wallet',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'wallet' : 'wallet-outline'} color={color} />
            ),
          }}
        />
        
      </Tabs>
    </>
  );
}
