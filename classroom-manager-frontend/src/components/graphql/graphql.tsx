import React from "react";
import { useQuery } from "@apollo/client";
import { studentsQuery, assignmentsQuery, assignmentSubmissionsQuery } from "../../graphql/queries";
import "./graphql.css"


export const AssignmentSubmissions: React.FC = () => {
    const { loading, error, data } = useQuery(assignmentSubmissionsQuery(undefined));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}, {error.graphQLErrors.toString()}, {error.extraInfo}, {error.stack}</p>;

    return data.assignmentSubmissions.map((student: any) => (
        <p className="graphql-info">
            {student.assignment}: {student.student}
        </p>
    ));
}

export const Assignments: React.FC = () => {
    const { loading, error, data } = useQuery(assignmentsQuery());

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}, {error.graphQLErrors.toString()}, {error.extraInfo}, {error.stack}</p>;

    return data.assignments.map((student: any) => (
        <p className="graphql-info">
            {student.name}: {student.id}
        </p>
    ));
}

export const Students: React.FC = () => {
    const { loading, error, data } = useQuery(studentsQuery());

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}, {error.graphQLErrors.toString()}, {error.extraInfo}, {error.stack}</p>;

    return data.students.map((student: any) => (
        <p className="graphql-info"> 
            {student.name}: {student.id}
        </p>
    ));
}

