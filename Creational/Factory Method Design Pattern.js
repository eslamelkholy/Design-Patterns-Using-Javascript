// Famous Interview Example
class Developer{
    askQuestions()
    {
        console.log("Ask About Design Pattern");
    }
}
class CommunityExecutive{
    askQuestions()
    {
        console.log("Asking About Community Building");
    }
}
// This The Generic Class
class HiringManger{
    takeInterview()
    {
        const interview = this.makeInterviewer()
        interview.askQuestions();
    }
}

class DevelopmentManger extends HiringManger{
    makeInterviewer()
    {
        return new Developer();
    }
}

class MarketingManger extends HiringManger{
    makeInterviewer()
    {
        return new CommunityExecutive();
    }
}

let devManger = new DevelopmentManger();
devManger.takeInterview();

let marketingManger = new MarketingManger();
marketingManger.takeInterview();