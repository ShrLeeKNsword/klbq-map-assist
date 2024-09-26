const contributeList = [
    {
        job: "code",
        name: "ShrLeeKNsword",
        icon: "https://avatars.githubusercontent.com/u/83012768?v=4",
        github: "https://github.com/ShrLeeKNsword/",
        bili: "https://space.bilibili.com/403314450",
    },
    {
        job: "code & translation",
        name: "ShrLeeKNsword",
        icon: "https://avatars.githubusercontent.com/u/77004524?v=4",
        github: "https://github.com/MiekoHikari/",
        bili: "",
    },
]

const ContributeBox = () => {
    return <div style={{ maxHeight: "600px", width: "300px",paddingTop:"5px" }}>
        <div style={{ height: "100%", width: "100%" }}>
            {contributeList.map((child) => {
                return <div style={{ height: "50px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", margin: "5px" }}>
                    <img src={child.icon} style={{ height: "50px" }}></img>
                </div>
            })}
        </div>
        <div style={{ fontSize: "15px", fontWeight: "bold", textAlign: 'center', display: "flex", alignItems: "center", justifyContent: "center", height: "30px" }}>Learn More</div>
    </div>
}

export default ContributeBox;