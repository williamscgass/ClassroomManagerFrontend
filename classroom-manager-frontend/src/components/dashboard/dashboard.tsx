import React from "react";
import "./dashboard.css"
import { Students, AssignmentSubmissions, Assignments } from "../graphql/graphql";

type PageOptions =  1 | 2 | 3

const Dashboard: React.FC = () => {
    const [currentPage, setCurrentPage] = React.useState<PageOptions>(1);

    let body;
    if (currentPage == 1) {
        body = <p>Dashboard</p>
    }
    else if (currentPage == 2) {
        body = <Students />
    }
    else {
        body = <Assignments />
    }

    return <div>
        <DashboardHeader currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        {body}
    </div>
}

type DashboardHeaderProps = {
    currentPage: PageOptions,
    setCurrentPage: (arg0: PageOptions) => void
}
const DashboardHeader: React.FC<DashboardHeaderProps> = ({...props}) => {
    const headers = ["Dashboard", "Students", "Assignments"];
    const content = headers.map((header, index) => {
        let className;
        if (index + 1 == props.currentPage) {
            className = "dashboard-header-selected"
        }
        else {
            className  = "dashboard-header"
        }
        return <h2 className={className} onClick={() => {props.setCurrentPage(index + 1 as PageOptions)}}>{header}</h2>
    })

    return <div id="dashboard-header">
        {content}
    </div>
}

export default Dashboard;