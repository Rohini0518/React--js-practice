 function ScrollImage(){
    const allImages=[{id:1,img:"https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"},
        {id:2,img:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"},
        {id:3,img:"https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcnN8ZW58MHx8MHx8fDA%3D"},
        {id:4,img:"https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhcnN8ZW58MHx8MHx8fDA%3D"},
        {id:5,img:"https://images.unsplash.com/photo-1588258219511-64eb629cb833?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNhcnN8ZW58MHx8MHx8fDA%3D" },
        {id:6,img:" https://images.unsplash.com/photo-1543796076-c8a565501995?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGNhcnN8ZW58MHx8MHx8fDA%3D"},
        {id:7,img:"https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc4fHxjYXJzfGVufDB8fDB8fHww "}
    ]

    
    return(
        <div>
            <p>All Images</p>
            <div style={{display:"flex",width:"80%",justifyContent:"space-between"}}>
                <button>left</button>
        {allImages.map((item)=>(<li key={item.id} style={{ listStyle: "none" }} >
            <img src={item.img} style={{width:"120px",height:"120px",borderRadius: "50%" }} />
            </li>))}
            <button>right</button>

            </div>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<ScrollImage/>)