// import jobData from "../assets/jobData";
import JobIndexItem from "./JobIndexItem";

const JobIndex = ({jobData}) => {
    const jobs = Object.values(jobData);
    console.log(jobs);

    const jobList = jobs.map((job) => {
        return <JobIndexItem job={job} key={job.id}/>
    });
    
    return (
        <ul className="job-index">
            {jobList}
        </ul>
    )
}

export default JobIndex;