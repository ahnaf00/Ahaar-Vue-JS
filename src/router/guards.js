import { useAuthStore } from "../stores/auth"; 

export function requiresAuth(to,from,next)
{
    const auth = useAuthStore()
    if(to.meta.requiresAuth && !auth.isAuthenticated)
    {
        next({name:'AdminLogin',query:{redirect:to.fullPath}})
    }else
    {
        next()
    }
}