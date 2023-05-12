/*
DESCRIPTION:
You are the best freelancer in the city. Everybody knows you, but what they don't know, is that you are actually offloading your work to other freelancers and and you rarely need to do any work. You're living the life!

To make this process easier you need to write a method called workNeeded to figure out how much time you need to contribute to a project.

Giving the amount of time in minutes needed to complete the project and an array of pair values representing other freelancers' time in [Hours, Minutes] format ie. [[2, 33], [3, 44]] calculate how much time you will need to contribute to the project (if at all) and return a string depending on the case.

If we need to contribute time to the project then return "I need to work x hour(s) and y minute(s)"
If we don't have to contribute any time to the project then return "Easy Money!"
*/

function workNeeded(projectMinutes, freelancers) {
  const countMins = freelancers.reduce((acc,[hour, minutes]) => acc + hour * 60 + minutes, 0)
  if (countMins >= projectMinutes) {
    return "Easy Money!"
  } else {
    let extra = projectMinutes - countMins,
        hours = 0, minutes = 0;

    while (extra >= 60) {
      hours++;
      extra -= 60;
    }
    
    minutes = extra;
    
    return `I need to work ${hours} hour(s) and ${minutes} minute(s)`;
  }
}

/*
With reduce:
const workNeeded = (p, f) => (p = f.reduce((s,[h,m])=> s - h*60- m,p)) <= 0  ? 
                "Easy Money!" :
                `I need to work ${p/60|0} hour(s) and ${p%60} minute(s)`;

*/
