import React, { useState, useEffect } from 'react';
import { getBlogs } from '../functions/blog';
import { TheCardInfoProps } from '../components/cardInfo';
import { getProjects } from '../functions/projects';
import { User } from 'firebase/auth';

// Antes envez de getAllBlogs estaba solamente getBlogs.

const MyContext = React.createContext(null);

export const FacundoProvider = (props) => {

    const [blogs, setBlogs] = useState<TheCardInfoProps>();
    const [projects, setProjects] = useState<TheCardInfoProps>();
    const [user, setUser] = useState<User>(null);

    useEffect(() => { setBlogs(getBlogs()); }, []); 
    useEffect(() => { setProjects(getProjects()); }, []);
    // Esto se ejecuta cada vez que se refresca cualquier pagina.


    // Funciones
    function filterBlogsBySearch(str: string) {
        if (str === '') {
            setBlogs(getBlogs());
            return
        }
        let newBlogs = getBlogs();
        newBlogs.props = newBlogs.props.filter((blog) => blog.title.toLowerCase().includes(str.toLowerCase()));
        setBlogs(newBlogs);
    }

    function filterProjectsBySearch(str: string) {
        console.log('filterProjectsBySearch');
        if (str === '') {
            setProjects(getProjects());
            return
        }
        let newProjects = getProjects();
        newProjects.props = newProjects.props.filter((blog) => blog.title.toLowerCase().includes(str.toLowerCase()));
        setProjects(newProjects);
    }

    function filterBlogsByFramework(str: string) {
        if (str === 'All') {
            setBlogs(getBlogs());
            return
        }
        console.log(getBlogs());
        let newBlogs = getBlogs();
        newBlogs.props = newBlogs.props.filter((blog) => blog.keyword === str);
        setBlogs(newBlogs);
    }

    function filterProjectsByFramework(str: string) {
        console.log('filterProjectsByFramework');
        if (str === 'All') {
            setProjects(getProjects());
            return
        }
        const newProjects = getProjects();
        newProjects.props = newProjects.props.filter((blog) => blog.keyword === str);
        setProjects(newProjects);
    }

    const values = {
        blogs, projects, setBlogs, setProjects,
        user, setUser,
        filterBlogsBySearch, filterProjectsBySearch,
        filterBlogsByFramework, filterProjectsByFramework
    };

    return <MyContext.Provider value={values} {...props}/>
}

export const useProvider = () => {
    const context = React.useContext(MyContext);
    if (!context) throw new Error('useProvider debe estar dentro del provider');
    return context;
}