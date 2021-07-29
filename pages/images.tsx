import React, { useEffect, useState, useRef } from 'react'
const ListItem = ({ image, index }) => (
    <img className="ListItem" src={image} key={index} width="200" height="200"/>
);

const fakeFetch = (delay = 1000) => new Promise(res => setTimeout(res, delay));

const images = () => {

    const [state,setState] = useState({itemCount:0,isLoading:false})
    const [target,setTarget] = useState(null)
    
    useEffect(() => {
        fetchItems();
    }, []);
    const fetchItems = async () => {
        console.log('count ? ',state.itemCount)
        setState(prev => ({ ...prev, isLoading: true }));
        await fakeFetch();
        setState(prev => ({
          itemCount: prev.itemCount + 3,
          isLoading: false
        }));
        console.log('count ? ',state.itemCount)
      };
    const imageList = 
        [
            'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg',
            'https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073__340.jpg',
            'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041__340.jpg',
            'https://cdn.pixabay.com/photo/2015/04/10/17/03/pots-716579__340.jpg',
        ]
    useEffect(() => {
        let observer;
        if (target) {
            console.log("taget is...",target)
            observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
            observer.observe(target);
        }
      return () => observer && observer.disconnect();
    }, [target]);
    
	/* 인터섹션 callback */
    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting) {
            console.log("111111")
            observer.unobserve(entry.target);
            await fetchItems();
            observer.observe(entry.target);
        }
    };
    const { itemCount, isLoading } = state;
    return (
        <>
            images<br/>
            IntersectionObserver 로 해보자.<br/>
            {[...Array(itemCount)].map((_, i) => {
                return (
                    <>  
                        {i % 3 == 0 && <br/>}
                        <ListItem image={imageList[i%3]} index={i} key={i} />
                    </>
                    )
            })}
            <div ref={setTarget} />
        </>
    )
}

export default images