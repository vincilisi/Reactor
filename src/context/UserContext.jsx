import {createContext, useState, useEffect} from 'react';
import supabase from '../database/supabase';

export const UserContext = createContext();

export const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    const getUser = async ()=>{
        const {data : {session}, error} = await supabase.auth.getSession();
        if(session){
            setUser(session.user ?? null);
            let {data : profiles} = await supabase
                .from('profiles')
                .select()
                .eq('id', session.user.id);
            setProfile(profiles[0]);
        }
        setLoading(false);
    }

    useEffect(
        ()=>{
            getUser();
        },[]
    )

    const signOut = async ()=>{
        await supabase.auth.signOut();
        setUser(null);
        setProfile(null);
    }

    const signUp = async (newUser)=>{
        await supabase.auth.signUp(newUser);
        await getUser();
    }

    const login = async (loggedUser)=>{
        await supabase.auth.signInWithPassword(loggedUser);
        await getUser();
    }   


    const updateProfile = async(newProfile)=>{
        const{data, error} = await supabase
        .from('profiles')
        .update(newProfile)
        .eq('id', user.id)
        .select();

        await getUser();
    }


    return(
        <UserContext.Provider value={{user, profile, loading, signUp, login, signOut, getUser, updateProfile}}>
            {children}
        </UserContext.Provider>
    )
}