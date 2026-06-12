export default function SideBar(){
    return(
        <>
        <div className="flex flex-col md:flex-row"> 
            <aside className="w-60">
                Sidebar
            </aside>
            <main className="flex-1">
                Content
            </main>
        </div>
        </>
    )
}