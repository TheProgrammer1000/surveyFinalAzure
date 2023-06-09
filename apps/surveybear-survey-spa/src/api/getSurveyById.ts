import { ISurvey } from "@surveybear/surveybear-lib";

export const getSurveyById = async ( surveyId: string): Promise<ISurvey> => {
    console.log(surveyId);
    return (await fetch(`http://localhost:3000/api/survey/${surveyId}`)).json();
}
