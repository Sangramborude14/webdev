import React, {createContext, useContext, useState} from 'react';

//create the context
const TabsContext = createContext();

// Parent component
export function Tabs({children, defaultActiveTab}){
    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    const value = {activeTab, setActiveTab};

    return (
        <TabsContext.Provider value={value}>
            <div className='tabs-container'>{children}</div>
        </TabsContext.Provider>
    )
}

function useTabs(){
    const context = useContext(TabsContext);
    if(!context){
        throw new Error('Tab subcomponent must be rendered within a <Tabs> parent.')
    }
    return context;
}

//buidling sub-component

Tabs.list = function TabsList({children}){
    return <div className='tabs-list-wrapper'>{children}</div>
}

Tabs.Tab = function Tab({id,children}){
    const {activeTab,setActiveTab} = useTabs();
    const isActive = activeTab === id;

    return(
        <button onClick={() =>setActiveTab(id)} className={`tab-btn ${isActive? 'active': ''}`}>
            {children}
        </button>
    )
}