import React from "react";
import { useQuery } from "@apollo/client";
import { studentsQuery, assignmentsQuery, assignmentSubmissionsQuery } from "../../graphql/queries";


export const AssignmentSubmissions: React.FC = () => {
    const { loading, error, data } = useQuery(assignmentSubmissionsQuery(undefined));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}, {error.graphQLErrors.toString()}, {error.extraInfo}, {error.stack}</p>;

    return data.assignmentSubmissions.map((student: any) => (
        <div key="abc">
            <p>
                {student.assignment}: {student.student}
            </p>
        </div>
    ));
}

export const Assignments: React.FC = () => {
    const { loading, error, data } = useQuery(assignmentsQuery());

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}, {error.graphQLErrors.toString()}, {error.extraInfo}, {error.stack}</p>;

    return data.assignments.map((student: any) => (
        <div key="abc">
            <p>
                {student.name}: {student.id}
            </p>
        </div>
    ));
}

export const Students: React.FC = () => {
    const { loading, error, data } = useQuery(studentsQuery());

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}, {error.graphQLErrors.toString()}, {error.extraInfo}, {error.stack}</p>;

    return data.students.map((student: any) => (
        <div key="abc">
            <p>
                {student.name}: {student.id}
            </p>
        </div>
    ));
}

