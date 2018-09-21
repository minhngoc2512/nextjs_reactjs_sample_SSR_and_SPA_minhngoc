export const classifiedRewrite = (url,modal=1)=>{
    return  {
        pathname:url,
        state:{ modal }
    }
};
export const rewrite = (url,modal=1)=>{
    return  {
        pathname:url,
        state:{ modal }
    }
};