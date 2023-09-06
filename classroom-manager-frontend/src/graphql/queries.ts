import { useQuery, gql } from "@apollo/client";

export const studentsQuery = () => {
  const query = gql`
    {
      students {
        name,
        id
      }
    }
  `

  return query;
};

export const assignmentsQuery = () => {
    const query = gql`
    {
        assignments {
            name
        }
    }
    `

    return query;
}

export const assignmentSubmissionsQuery = (assignmentName: string | undefined) => {
    const query = assignmentName ? gql`
        assignmentSubmissions (assignment: ){
            assignment,
            student
        }` : gql`
    {
        assignmentSubmissions {
            assignment,
            student
        }
    }`

    return query;
}
