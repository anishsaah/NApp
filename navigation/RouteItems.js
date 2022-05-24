import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export const screens = {
    HomeTab: 'HomeTab',
    HomeStack: 'HomeStack',
    Home: 'Home',
    GunStack: 'GunStack',
    Gun:'Gun',
    ContactStack:'ContactStack',
    Contact:'Contact',
    MyRewardsStack: 'MyRewardsStack',
    MyRewards:'MyRewards',
    MessageStack: 'MessageStack',
    Message:'Message',
}


export const routes = [ 
    {
        name: screens.HomeTab,
        focusedRoute: screens.HomeTab,
        title:"Home",
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name='drupal' size={30} color={ focused ? '#758996' :'#000' } />,
    },
    
    { 
        name: screens.HomeStack,
        focusedRoute: screens.HomeStack,
        title:"Home",
        showInTab: true,
        showInDrawer: true,
        icon: (focused) =>
            <Icon name='drupal' size={30} color={ focused ? '#31819e' :'#000' } />,
    },
    
    { 
        name: screens.Home,
        focusedRoute: screens.HomeStack,
        title:"Home",
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name='drupal' size={30} color={ focused ? '#31819e' :'#000' } />,
    },
    
    { 
        name: screens.GunStack,
        focusedRoute: screens.GunStack,
        title:"Gun Here",
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name='superpowers' size={30} color={ focused ? '#31819e' :'#000' } />,    
    },

    { 
        name: screens.Gun,
        focusedRoute: screens.GunStack,
        title:"Gun Here",
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name='superpowers' size={30} color={ focused ? '#31819e' :'#000' } />,    
    },
    { 
        name: screens.ContactStack,
        focusedRoute: screens.ContactStack,
        title:"Spike Here",
        showInTab: true,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name='codepen' size={30} color={ focused ? '#31819e' :'#000' } />,    
    },
    { 
        name: screens.Contact,
        focusedRoute: screens.ContactStack,
        title:"Spike Here",
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name='codepen' size={30} color={ focused ? '#31819e' :'#000' } />,    
    },
    { 
        name: screens.MyRewardsStack,
        focusedRoute: screens.MyRewardsStack,
        title:"My Rewards",
        showInTab: false,
        showInDrawer: true,
        icon: (focused) =>
            <Icon name='star' size={30} color={ focused ? '#31819e' :'#000' } />,    
    },
    { 
        name: screens.MyRewards,
        focusedRoute: screens.MyRewardsStack,
        title:"My Rewards",
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name='star' size={30} color={ focused ? '#31819e' :'#000' } />,    
    },
    { 
        name: screens.MessageStack,
        focusedRoute: screens.MessageStack,
        title:"Messages",
        showInTab: false,
        showInDrawer: true,
        icon: (focused) =>
            <Icon name='map-marker' size={30} color={ focused ? '#31819e' :'#000' } />,    
    },
    { 
        name: screens.Message,
        focusedRoute: screens.MessageStack,
        title:"Messages",
        showInTab: false,
        showInDrawer: false,
        icon: (focused) =>
            <Icon name='map-maker' size={30} color={ focused ? '#31819e' :'#000' } />,    
    },
]