import React from 'react'
import { Box, Typography, Card, CardContent, CardMedia, Link, makeStyles, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BaseContainer from '../components/base-container'
import { spacing } from '@material-ui/system';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const headerSizes = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
];

function nextHeaderSize(headerSize) {
  return headerSizes[Math.min(headerSizes.indexOf(headerSize) + 1, headerSizes.length - 1)];
}

function Guide(props) {
  const classes = useStyles();
  return <div>
    <Box mt={4} ml={(props.padding) + 'px'}>
      <Typography variant={props.headerSize}>{props.title}</Typography>
    </Box>
    {props.questions ? props.questions.map(question => 
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h6'>{question.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1'>
            {question.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ) : null}
    {props.subsections ? props.subsections.map(subsections => 
      <Guide {...subsections} headerSize={nextHeaderSize(props.headerSize)} padding={props.padding + 16}></Guide>
    ) : null}
  </div>
}

const GuideLink = (props) => <Link color='secondary' target='_blank' {...props}>{props.children}</Link>;

function GuidesPage() {
  const guides = [
    {
      title: 'Academics',
      questions: [
        {
          title: 'Programme Structure',
          content:
            <div>
              You may refer <GuideLink href='https://www.comp.nus.edu.sg/cug'>here</GuideLink> for your degree requirements. Simply click on your major under "Degree Requirements per Cohort"
              and choose the year you were admitted from the panel on the right. Do note that not all modules are offered every semester.
            </div>,
        },
        {
          title: 'Past Year Exam Papers',
          content: <div>
            You may search and download past year examination papers <GuideLink href='https://libportal.nus.edu.sg/frontend/exam-papers'>here</GuideLink>. This is a repository of all past year final examination
            papers from every faculty that the school has uploaded into the system. However, do note that some papers will not be available
            should the module coordinator of that semester chooses not to upload his/her paper. Only the question paper, and not the answers,
            are provided on this platform.
          </div>,
        }
      ],
      subsections: [
        {
          title: 'S/U Options',
          questions: [
            {
              title: 'Rules',
              content:
              <div>
                JC students can S/U up to 32 MCs (or 8 modules) and Polytechnic students can S/U up to 20 MCs (or 5 modules) in their first year.
                Any unused S/Us can be carried forward to their remaining years subject to a maximum of 12 MCs (or 3 modules).
                <br/>
                <br/>
                Students can S/U only level 1000 modules and level 2000 modules with no prerequisites. All other modules cannot be S/U-ed.
                <br/>
                <br/>
                Many guides have included a rule of thumb such as "Keep all A, A- and B", "S/U all B- and below" etc.
                Our guide, however, approaches this issue from another perspective, as the decision to S/U or not is very much dependent on each individual.
              </div>
            },
            {
              title: 'To S/U or not?',
              content:
              <div>
                There are a few things to consider when deciding whether to S/U a module or not — your targeted class of honours,
                your confidence of reaching it, all your other grades relative to the grade in question, the number of S/Us left,
                and the number of S/U-able modules left.
                
                <br/>
                <br/>
                You should know the class you aim to achieve upon graduation, and a sensing of where you stand (at least you will
                know after 1 or 2 semesters from your grades). Most of the time, you will either be rather certain of attaining a
                certain class, or uncertain and hovering between 2 adjacent classes (e.g. 1st class and 2nd upper or 2nd upper and
                2nd lower). The purpose of S/U is then to maximize your CAP and help attain the honours class you want.
      
                <br/>
                <br/>
                Before analysing and deciding, you first need to know roughly where you stand. A good indication will be your CA
                before S/U-ing any modules, assuming you worked hard and will continue working equally hard for subsequent
                semesters. This will help form a realistic class to aim for, and help you decide which of the following
                2 scenarios you fall into. For example, if you get 4 B, 3 B+, and 3 A- (CAP 3.95 before S/U), you more
                or less can tell you'll either get a Distinction or Merit. This is because most of the modules are
                bell curved — putting in the same effort and being bell curved against your same peers will likely
                get you similar grades in future years. Of course, unless you can and decide to work much harder.
      
                <br/>
                <br/>
                <b>1st scenario.</b>
                Let's assume you're aiming a Distinction (&lt; 4.50 and &gt; 4.00). If you are confident of hitting that upon graduation
                (i.e. your grades are quite stable, or you are confident that it will be), simply S/U anything that is B+ and below
                as these will only pull your CAP down. Of course, ensure that you have sufficient S/Us to use it on grades lower
                than B+ first before S/U-ing those B+.
        
                <br/>
                <br/>
                <b>2nd scenario.</b> Now let's again assume that you're aiming for a Distinction (&lt; 4.50 and &gt; 4.00) — you're not
                confident of hitting it, but certain that you will get at least a Merit (&lt; 4.00 and &gt; 3.50). Since you're unsure,
                your B+ could either pull your CAP up, or down, depending on what class you eventually fall into. Further,
                your B+ will not hurt your chances of attaining a Distinction (neither will it improve). In this case, you
                should keep your B+ and S/U only all those grades lower than B+ (B, B-, C+, etc.) as these will hurt your
                chances of getting a Distinction.

                <br/>
                <br/>
                In both scenarios, you should have roughly enough S/Us to S/U the determined undesirable grades. However, you should
                still always count them. For example, if you have 1 S/U left and unsure whether to S/U a B+, count all your modules
                that can still be S/U-ed and evaluate your ability in scoring in each of the modules (you can get clues by asking
                around, checking if it is a qualitative, quantitative or coding mode, and if it is your strength). If it is likely
                that you will score all B+/A- and above, then just S/U the B+, but if there is significant uncertainty or if
                there is a module in the area that you know you are weak at and will likely score below B+, then save your S/U for it.


                <br/>
                <br/>
                You should have sufficient S/U if your goal is realistic and attainable. Let's look at a counter example. Assume the
                same 2nd scenario that you are aiming for a Distinction, and hence will S/U anything below B+. If your 1st year grades
                are A-, B+, B, B, B, B, B-, B-, B- C+, and C+, you will want to S/U the lower 8 grades. If you're from JC, this will
                leave you with no S/Us left and if you're from Polytechnic, you will be short of 3. In this scenario, perhaps a Distinction
                Honours Class will not be a realistic goal if you've already been giving your best. Consider then aiming for a Merit Honours
                Class, and correspondingly S/U-ing the lower 5 grades of B- and C+.

                <br/>
                <br/>
                <Typography variant='h6'>Exception 1</Typography>
                If you feel totally uncertain about your future grades and hence your class, you will want to S/U your lowest 8 or 5 modules,
                depending on whether you're from JC or Polytechnic. In this case, you can extrapolate your results thus far to decide on how
                many you want to S/U. For example, assume you get 1 A-, 2 B+ and 2 B (CAP 3.9) in your 1st semester, and you're from JC.
                Extrapolating will get you 2 A-, 4 B+, and 4 B in your 1st year. You will likely S/U your Bs.
                Whether you want to S/U your B+ will again depend on how confident you are of doing better in future.
                If you've already worked very hard and continue to do so, chances are you will get around the same CAP in future.

                <br/>
                <br/>
                It boils down to this: if you don't S/U the B+, and your graduating CAP is above 4, your final CAP will suffer a little at most, it will not affect your class from Distinction to Merit. However, if you choose to S/U, and you lack S/Us to use it on another module with a lower grade, this can actually affect your class from Distinction to Merit. In this case, it will be good to keep your B+ and save your S/U.

                <br/>
                <br/>
                <Typography variant='h6'>Exception 2</Typography>
                Some of you might have gotten bad grades due to playing your entire semester and barely put in any effort. In this case, try to evaluate how much your grades will potentially improve based on the effort you are intending to put in for your remaining semesters and S/U those, even all of them, below your projected ones.

              </div>
            }
          ]
        }
      ],
    },
    {
      title: 'Platforms',
      questions: [
        {
          title: 'NUS Email',
          content: 'This is where you access your official NUS Email. All school related activities, events, internship opportunities, examination circulars, announcements, etc will be sent here.',
        },
        {
          title: 'myEduRec',
          content: 'Education Records System (EduRec) is a platform for the platform where you access and settle all your administrative matters. You can view your exam schedule and results, view your transcript, apply to map your SEP modules, etc. You would also be able to change your credit debit (where NUS puts and deducts money respectively) bank account details. Click on ‘Academics’ or ‘Financials’ to access these features. ModReg@EduRec is the University’s consolidated module registration platform for all NUS students. It is used for module registration and selection of tutorial/lab slots. Selection of Modules and tutorial/lab slots would only be available during module registration (Academics -> Module Registration).',
        },
        {
          title: 'LumiNUS',
          content: `LumiNUS is the academic platform you access most often during your semester. After your module is locked in, you will be able to find announcements by your Professors, watch the module's webcasts, view grades for continual assessment, upload assignments and download the module's contents (lecture slides, tutorial sheets, etc.) your Professors upload.`,
        },
        {
          title: 'NUSMods',
          content: 'This is the single module planning website that almost all undergraduates use to plan their modules, created by our very own SoC alumni. It is linked with NUS official database, so the information should be up to date and accurate (if you want to be sure, do cross check with NUS official websites). Here, you can plan your timetable, search for module information (the semester it is being offered, its prerequisites and preclusions, its reviews, etc.), get a link to share your timetable, and even find venues from the timetable!',
        },
        {
          title: 'NUSync',
          content: 'This is where you access your official NUS Email. All school related activities, events, internship opportunities, examination circulars, announcements, etc will be sent here.',
        },
        {
          title: 'Facilities Booking',
          content: 'This is where you access your official NUS Email. All school related activities, events, internship opportunities, examination circulars, announcements, etc will be sent here.',
        },
      ]
    },
  ]
  return <BaseContainer>
  <Typography variant='h3'>
    Guides
  </Typography>
  <Typography variant='body1'>
    Listed here are guides, links to various platforms and FAQs which will be useful at different stages of your undergraduate life. Feel free to explore!
  </Typography>
  {guides.map(guide => <Guide {...guide} headerSize='h3' padding='0'></Guide>)}
  
  {/* <Guide {...prop}></Guide> */}
    <div class="container-guides">
      <div class="guide">
        <div class="contents">
        </div>
      </div>
      <div class="guide">
        <img src="https://nuscomputing.com/static/images/guides/platforms.svg" alt="platforms"/>
        <div class="contents">
          <h1><a href="https://nuscomputing.com/guides/platforms.html">Platforms</a></h1><a href="https://nuscomputing.com/guides/platforms.html#nus-email">NUS Email</a><br/>
          <a href="https://nuscomputing.com/guides/platforms.html#myedurec">myEduRec</a><br/>
          <a href="https://nuscomputing.com/guides/platforms.html#luminus">LumiNUS</a><br/>
          <a href="https://nuscomputing.com/guides/platforms.html#nusmods">NUSMods</a><br/>
          <a href="https://nuscomputing.com/guides/platforms.html#nusync">NUSync</a><br/>
          <a href="https://nuscomputing.com/guides/platforms.html#facilities-booking">Facilities Booking</a>
        </div>
      </div>
      <div class="guide">
        <img src="https://nuscomputing.com/static/images/guides/special_programmes.svg" alt="special_programmes"/>
        <div class="contents">
          <h1><a href="https://nuscomputing.com/guides/special_programmes.html">Special Programmes</a></h1><a href="https://nuscomputing.com/guides/special_programmes.html#special-programmes">Special Programmes</a><br/>
          <a href="https://nuscomputing.com/guides/special_programmes.html#double-degree-programme-faqs">Double Degree Programme FAQ</a>
        </div>
      </div>
      <div class="guide">
        <img src="https://nuscomputing.com/static/images/guides/overseas_opportunities.svg" alt="overseas_opportunities"/>
        <div class="contents">
          <h1><a href="https://nuscomputing.com/guides/overseas_opportunities.html">Overseas Opportunities</a></h1><a href="https://nuscomputing.com/guides/overseas_opportunities.html#nus-overseas-colleges">NUS Overseas Colleges</a><br/>
          <a href="https://nuscomputing.com/guides/overseas_opportunities.html#student-exchange-programmes">Student Exchange Programmes</a><br/>
          <a href="https://nuscomputing.com/guides/overseas_opportunities.html#summer-and-winter-programmes">Summer and Winter Programmes</a>
        </div>
      </div>
      <div class="guide">
        <img src="https://nuscomputing.com/static/images/guides/soc_student_award.svg" alt="soc_student_award"/>
        <div class="contents">
          <h1><a href="https://nuscomputing.com/guides/soc_student_award.html">SoC Student Award</a></h1><a href="https://nuscomputing.com/guides/soc_student_award.html#introduction">Introduction</a><br/>
          <a href="https://nuscomputing.com/guides/soc_student_award.html#pillars">Pillars</a><br/>
          <a href="https://nuscomputing.com/guides/soc_student_award.html#application">Application</a>
        </div>
      </div>
    </div>
  </BaseContainer>
}

export default GuidesPage