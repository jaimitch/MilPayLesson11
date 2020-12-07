export default {

    preassessmentCompleted: false,
    showLessons: false,
    showPreassessment: false,
    showPreassessmentButton: true,
    currentSlideTitle: undefined,
    questions: [
    {
        id: 1001,
        lesson: 1,
        text: "What is 1+2?",
        answers: [{'text':'3','correct':true},{'text':'4'},{'text':'25'}],
    },
    {
        id: 1002,
        lesson: 1,
        text: "What is 21+4?",
        answers: [{'text':'3'},{'text':'4'},{'text':'25','correct':true}],
    },
    {
        id: 1003,
        lesson: 1,
        text: "What is 4*4?",
        answers: [{'text':'12'},{'text':'16','correct':true},{'text':'25'}],
    },
    {
        id: 2001,
        lesson: 2,
        text: "What doth life?",
        answers: [{'text':'subservience to god'},{'text':'annihilation of one\'s enemies,'},{'text':'chillaxin','correct':true}],
    },
    {
        id: 2002,
        lesson: 2,
        text: "Who dem killah bees on da swarm?",
        answers: [{'text':'RZA'},{'text':'GZA'},{'text':'Inspectah Deck','correct':true}],
    }
],
prequestionsWrong: [],
prequestions: [
    {
        id: 1,
        lesson: 1,
        text: "What is 1+2?",
        answers: [{'text':'3','correct':true},{'text':'4'},{'text':'25'}],
    },
    {
        id: 2,
        lesson: 1,
        text: "What is 21+4?",
        answers: [{'text':'3'},{'text':'4'},{'text':'25','correct':true}],
    },
    {
        id: 3,
        lesson: 1,
        text: "What is 4*4?",
        answers: [{'text':'12'},{'text':'16','correct':true},{'text':'25'}],
    },
    {
        id: 4,
        lesson: 2,
        text: "What doth life?",
        answers: [{'text':'yay'},{'text':'nay'},{'text':'chillaxin','correct':true}],
    },
    {
        id: 5,
        lesson: 2,
        text: "Favorite Wu Affiliate?",
        answers: [{'text':'RZA'},{'text':'GZA'},{'text':'Warcloud','correct':true}],
    }
],

lessons:
            [
                {
                    lessonid: 1,
                    title: "Curriculum - Overview",
                    questions: [1001,1002,1003],
                    lectureLength: 16,
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 2,
                    title: "Research Finance Regulations",
                    questions: [4,5],
                    lectureLength: 21,
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                    
                },
                {
                    lessonid: 3,
                    title: "Reserve Pay Overview",
                    questions: [1,2,3],
                    lectureLength: 12,
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 4,
                    title: "Unit Commander's Finance Report",
                    questions: [1,2,3],
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 5,
                    title: "Determine Basic Pay",
                    questions: [1,2,3],
                    lectureLength: 28,
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 6,
                    title: "Allowances",
                    questions: [1,2,3],
                    lectureLength: 47,
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 7,
                    title: "Permanent Change of Station (PCS) Entitlements ",
                    questions: [1,2,3],
                    lectureLength: 31,
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 8,
                    title: "Allotments",
                    questions: [1,2,3],
                    lectureLength: 17,
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 9,
                    title: "Special & Incentive Pay",
                    questions: [1,2,3],
                    lectureLength: 33,
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 10,
                    title: "Federal Tax",
                    questions: [1,2,3],
                    lectureLength: 14,
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 11,
                    title: "Savings Deposit Program (SDP)",
                    questions: [1,2,3],
                    lectureLength: 26,
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 12,
                    title: "Collections From Military Pay",
                    questions: [1,2,3],
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 13,
                    title: "Other Deductions",
                    questions: [1,2,3],
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 14,
                    title: "Military Pay Metrics",
                    questions: [1,2,3],
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 15,
                    title: "Military Pay Audit Fundamentals",
                    questions: [1,2,3],
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 16,
                    title: "IPPS-A Overview",
                    questions: [1,2,3],
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                },
                {
                    lessonid: 17,
                    title: "IPPS-A Overview",
                    questions: [1,2,3],
                    passedLesson: false,
                    attemptedLesson: false,
                    parsedLecture: false
                }
            ],
lessonNotes: [
    {
        lessonid: 1,
        slide: 1,
        notes: `We will discuss an overview of the course, schedule, standards, objectives, and the six step process for correcting a Soldier’s pay.`,
        links: ['link1.com','link2.com']
    },
    {
        lessonid: 1,
        slide: 2,
        notes: `This training course is 4 days and consists of 15 lessons, practical exercises, and an exam. Take a moment to view the training schedule which outlines the lessons for each day. We will use the reference sheet provided which has several useful links to assist throughout this course.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 1,
        slide: 3,
        notes: `If you are signed up for this course, attendance is mandatory. This course is 32 hours and you cannot miss more than two hours of training. All practical exercises must be completed and achieve a minimum of 80% on the exam. A certificate of completion will be given at the end of this course. You must meet attendance requirements, complete all practical exercises and pass the exam to receive the certificate.
        <br>Ask the class: “Can anyone tell me how many HR/pay systems there are”?`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 1,
        slide: 4,
        notes: `Select a student from the class to read Purpose.
        <br>Can anyone share their experience on how they have handled pay questions?
        <br>By the end of this course HR professionals will learn the tools needed to answer pay inquiries, research finance regulations, determine what a Soldier could be entitled to and how it affects them. We will identify key supporting documents that may trigger a Soldier’s pay. We will learn to review the Unit Commander’s Finance Report and the importance of it.
        <br>By the end of this course, you will be a subject matter expert on Military Pay, As this is a train the trainer course. It is necessary to conduct this training to prepare HR professionals for the Integrated Personnel and Pay System Army (IPPSA).
        <br>Let’s understand the main source of service member’s entitlements. We are paid through public laws that are passed by Congress and signed by the President. These laws are in the form of US codes and titles.
        <br>Soldiers receive base pay based on creditable service and pay grade. For example, two Staff Sergeants may have the same rank, but may not receive the same pay because of his or her years of service.
        <br>All soldiers must be in a pay status to receive their pay, allowances, incentives, etc. Pay is determined by a members status and circumstances.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 1,
        slide: 5,
        notes: ``,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 1,
        slide: 6,
        notes: `Status – Present for Duty, Confinement, Absent Without Leave (AWOL)
        <br>Location – Overseas Housing Allowance (OHA), Cost of Living Allowance (COLA), Basic Allowance for Housing (BAH)
        <br>Duty Performed – Airborne, Flying duty, Drill Sergeant
        <br>Grade – Promotion, Reduction
        <br>Skill Level – Foreign Language (Must be on orders and performing the duty) Events – Marriage, Divorce, Birth, Deployment
        <br>The Defense Joint Military System (DJMS) is the current finance system which contains up to 5 years of historical data. This system will be in place until IPPS-A is implemented.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 1,
        slide: 7,
        notes: `The current system environment has 200 HR/Pay System and over 650 interfaces that exchange data between internal and external systems. IPPS-A will change this by being one system that holds all data.
        <br>Soldiers will be able to access personnel records at any time using their phones, tablets, and laptops. Also, Soldiers will be able to identify the status of their actions in real-time.
        <br>In preparation for the IPPSA transition, it is essential to ensure that the Soldier's data is correct. It will prevent having to make corrections while trying to learn a new system at the same time.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 1,
        slide: 8,
        notes: `When you receive a pay inquiry from a Soldier, we recommend using these six steps.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 1,
        slide: 9,
        notes: `When a Soldier requests assistance on any pay related issues, the first step is to have the Soldier fill out a pay inquiry. The pay inquiry is used to track all pay questions and review trends of a unit.
        <br>All pay inquiries needs to be explained in detail. As you see in this example, the Soldier did not receive Family Separation Allowance (FSA) and gave specific dates and location. If the Soldier wrote that they did not receive FSA with no other information, it will make it difficult for the HR professional to answer the pay inquiry. The more information on the pay inquiry, the easier it is to respond and provide feedback in a timely manner.
        The pay inquiry should be answered within 72 hours. Now that you have received the pay inquiry, what do you think we will do next?`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 1,
        slide: 10,
        notes: `The second step is research. To conduct research, it is recommended to read finance regulations as they are always changing. It is important to give the most accurate and updated information to ensure that the Soldier is authorized the entitlement.
        <br>Research can also be done by the system capabilities that an HR has, such as emilpo or the deviation report. UTL’s can be used to track if the pay action was submitted. Review DROT reports to check if transaction have processed. We will discuss UTL and DROT in the later slides. A Soldier can also check their LES to see if they received payment for the entitlement.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 1,
        slide: 11,
        notes: `If the Soldier is authorized the entitlement, then we need to collect the key supporting documentation and send to the Defense Military Pay Office (DMPO).
        <br>On the HRC website there is a KSD entitlement matrix that will show the required documents for each pay action. At this time, let’s go to the following link and look at the Key Supporting Documents for Military Pay Entitlements.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 1,
        slide: 12,
        notes: `Step four is the unit transmittal letter (UTL). Your unit may use a different UTL than the one on this slide. Ensure the Soldier’s name, SSN, and each document are annotated on the UTL. The UTL can be used for tracking documents that were sent to the DMPO and when.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 1,
        slide: 13,
        notes: `Step five is the Daily Register of Transactions (DROT). This report can be provided by the DMPO showing the status of each pay action that was sent for processing.
        <br>The DROT shows transactions that were processed, rejected, and recycled.
        <br>Processed: Pay action is complete.
        <br>Recycled: Action may be for a future date and will be recycled until the effective date of that action. For example, if DMPO receives a request for FSA for a Soldier who has been separated from dependents for less than 30 days, the request will be recycled until after the 30th day.
        <br>Rejected: Pay action was not processed. Contact DMPO.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 1,
        slide: 14,
        notes: `The Unit Commander’s Finance Report is step six. This is a monthly report that the commander certifies to ensure all Soldiers are being paid correctly. Lesson three will go over the UCFR in detail. The Soldier can also check their LES for updates and to make sure that their pay is correct.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 1,
        slide: 2,
        notes: `We went over the course schedule, course standards, objectives, and the six step process for military pay.
        What are your Questions? Comments? Or Concerns?`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 2,
        slide: 1,
        notes: `The Army is an organization with multiple regulations that governs its structureon how each section should operate,
        therefore researching is an important tool tohave. “What is a common research tip we use in the Army?”`,
        links: ['link1.com','link2.com']
    },
    {
        lessonid: 2,
        slide: 2,
        notes: `We will discuss the regulations that governs military pay entitlements (DoDFMR & JTR, milpay E-Messages and their purpose.`,
        links: ['link1.com','link2.com']
    },
    {
        lessonid: 2,
        slide: 3,
        notes: `When researching questions from customers it is helpful to use several different techniques to locate the specific area of the DoDFMR.
                <br><ol><li>Look/listen for KEY WORDS or terms</li>
                <li>Use the Table of Contents to assist in narrowing down your search to the Chapter. Each chapter has table of contents to further break down the chapter into sections. This will speed up the processes of research</li>
                <li>Search through the chapter, eliminate paragraphs and sub-paragraphs that do not pertain to your specific search.</li>
                    <ul><li>You may also need to find the section within the chapter. For example, the answer to a question about Parachute Pay can be found in chapter 2402.</li>
                        <li>The specific paragraph may also be needed to answer the question. Scan the paragraph titles within the section.</li>
                    </ul>
                </ol>
                Example: Where in the regulation would you find, “the effect a missing status has upon a Soldier’s entitlement on Parachute Pay?”
                <br>Answer: chapter 24, section 1, and paragraph 7 or 240107.`,
        links: ['link1.com','link2.com']
    },
    {
        lessonid: 2,
        slide: 4,
        notes: `Navigate to the DoDFMR home page: <a href="https://comptroller.defense.gov/fmr/">https://comptroller.defense.gov/fmr/</a> The DoDFMR is the source for the policies, regulations, and
                procedures under the authority of The Under Secretary of Defense (Comptroller) - USD(C) for the entire DoD ( i.e. Army, Navy, Air Force etc.)The DoDFMR 7000.14-R, Vol 7A will hereafter be referred to as the DoDFMR.`,
        links: ['link1.com','link2.com']
    },
    {
        lessonid: 2,
        slide: 5,
        notes: `Listed are all the major sections in the DoDFMR, which we will discuss further in the slides ahead but let’s take a look at the “Definitions” section. Have class go to the DoDFMR, CTR + F and type DEFINITIONS. 
                This section lists terms used in each chapter, then explains what that term means to avoid confusion.`,
        links: ['link1.com','link2.com']
    },
    {
        lessonid: 2,
        slide: 6,
        notes: `Regulation CHANGES and REVISIONS are found on the HOME PAGE of the DoDFMR by selecting the link called DoDFMR recently published changes. NEW REVISIONS and CHANGES are indicated by use of BLUE FONT and a BLUE Asterisk (*), placed immediately before the revised section, paragraph, subparagraph, figure, or table. 
                Changes are formalized and incorporated in the next update of the regulation. There is not a specific timeline for updates, the updates are added as needed. 
                <br>“What indicates that a change was made to any entitlement in the DoDFMR?”`,
        links: ['link1.com','link2.com']
    },
    {
        lessonid: 2,
        slide: 6,
        notes: `Navigate to Chapter 1 of the DoDFMR.
                <br>The numbering system used in the DoDFMR is simple to follow.
                <br><ul><li>2 digits for chapters</li>
                <li>4 digits for sections</li>
                <li>6 digits for paragraph</li>
                <li>6 digits plus the subparagraph ex.</li></ul>`,
        links: ['link1.com','link2.com']
    },
    {
        lessonid: 3,
        slide: 1,
        notes: `Ask “How many personnel have processed pay actions for Army Reserve Soldiers?”
        <br><br>Explain to students: Processing pay actions for Army Reserve Soldiers differ from those of the Active Component because Army Reserve Soldiers serve in various duty statuses which impacts their entitlements. The Army Reserve Administrator (ARA) is responsible for initiating pay actions for TPU Soldiers. The exception is units supported by a Reserve Personnel Action Center (RPAC). RPACs initiate pay actions for all units in their location`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 3,
        slide: 2,
        notes: `Tell the students. Upon successful completion of this lesson, you will be able to find USAR Regulations; know the Reserve’s geographic areas of responsibility; learn different Reserve acronyms, know different USAR duty types; transfer and sell leave; and understand USAR common pay forms.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 3,
        slide: 3,
        notes: `Ask the students: “Why is it important to know the different USAR regulations?” <br><br>Their response should be: “To have a basic understanding of USAR
        procedures.”
        <br><br>The most common used USAR pay regulations are: DODFMR VOL 7A, JTR, USAR PAM 37-1, Reserve Pay Supplemental Guide and the Finance Guide for USAR Soldiers. These regulations are utilized by the S1/ARA to process pay actions for the Reserve Component.
        <br><br>The DodFMR VOL 7A is the main regulation the governs all Active and Reserve Pay. Additional regulations can be used as supplements to the DoDFMR VOL 7A.
        <br><br>Note: The chain of command for Reserve finance actions is the Unit ARA, the appropriate Readiness Division (RD) (based off of geographical location), and then to USARC G8 Pay Management Division.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 3,
        slide: 4,
        notes: `The Army Reserve Administrator (ARA) or servicing Reserve Pay Actions Center (RPAC) should be able to answer and resolve common pay inquiries submitted by USAR Soldiers. Units and RPACs will contact their respective Readiness Division (RD) Finance Office for pay issues they cannot resolve.
        <br><br>The US Army Reserve have four main geographic areas of responsibilities that were designed to assist commands with pay issues and procedures. Each Readiness Division provides assistance based on their respective area of responsibility. The list above provides the names and areas of responsibility for each Readiness Division.
        <br><br>If the RD is unable to assist, then the RD will forward the inquiry to the Army Reserve G8 Pay Management Division. The G8 will investigate and provide a solution to the issue. The resolution will be sent back down the Chain of Command to the Soldier’s unit.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 3,
        slide: 5,
        notes: `Ask the students:“Is anyone familiar with the USAR Pay Systems?”
        <br><br>The Regional Level Application Software (RLAS) is the system that USAR use for personnel and pay transactions. Any input in the RLAS system feeds the DJMS-RC system. RLAS is used to process Inactive duty pay and Active Duty pay of 1-29 days.
        <br><br>The Defense Joint Military Pay System Reserve Component (DJMS-RC) is a system that establish pay accounts for Reserve Soldiers. The DJMS-RC receives the pay data from RLAS in order to process pay for USAR Soldiers and feed the pay transaction to DFAS.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 3,
        slide: 6,
        notes: `<p class="notes-text-sm">Army Reserve Soldiers serve in various duty types and statuses.
        <br><br>Ask the students “Is anyone familiar with any of these terms and can provide an
        example of a Soldier who serves in any of the duty types listed?”
        <br><br>The Active Guard Reserve (AGR) is a Reserve Soldier placed on Active Duty status under title 10 orders. AGRs are managed by HRC and receive funding from the federal government. The National Guard also have the AGR program the main difference is the NG gets their funding from their state.
        <br><br>Troop Program Unit Soldier (TPU) is the term used for a reservist in a drilling status. A TPU must perfrom Battle Assembly at least two days a month (unless properly excused by the Commander) and perform a minimum two weeks of Annual Training (AT) once a year.
        <br><br>The Individual Ready Reserve (IRR) is an Army Reserve program that manages Inactive Army Reserve Soldiers. These Soldiers are not required to drill monthly or complete Annual Training. They are called upon to serve on Active Duty orders as needed.
        <br><br>The Individual Mobilization Augmentee (IMA) facilitate the rapid expansion of the Active Army wartime structure to meet military manpower requirements in the event of military contingency, premobilization, mobilization, sustainment and/or
        de-mobilization operations. IMA Soldiers are trained in peacetime so that they are able to perform their designated duties when ordered to active duty. IMA Soldiers are required to complete IDT and AT yearly.</p>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 3,
        slide: 7,
        notes: `<p class="notes-text-sm"Training types can be referenced in the USAR PAM 37-1, 1-6. Reserve training types
        <br><br>TPU training consists of two types: inactive duty training (IDT) and active duty (AD) training. There are also different types of inactive and active duty training.
        <br><br>(Unit Training) Inactive Duty Training and Annual Training (AT)
        The USAR refers to unit IDT as a battle assembly (BA). The BAs must be a minimum of 4 hours long. Soldiers may perform a maximum of two BAs on the same day; this is known as a BA 2 (2 meaning two BAs). Most units perform a BA 4 each month that consists of a BA 2 on Saturday and a BA 2 on Sunday. Active duty performed as a unit is known as annual training (AT). Units normally perform 2 weeks of AT each year.
        <br><br>Active Duty Training (ADT) and Annual Training (AT) is a type of duty status the Reserve utilize to send reservists to any local training or workshop such as Equal Opportunity Leader Traning, or Unit Prevention Leader Training. This is not the same as unit training. Active duty performed as a unit is known as unit annual training (AT). Units normally perform 2 weeks of AT each year.
        <br><br>Active Duty for Training Schools (ADTS) is another type of duty status that is used for Reserve Soldiers attending schools like PME or MOS reclassification.
        <br><br>Active Duty for Operational Support (ADOS) is a status is utilize to bring a reservist to their parent unit to provide support on their daily operations.
        <br><br>Mobilization for Contingency Operations (MOB CONOPs) is a duty type that is used for Soldiers deploying in support of any Contingency Operations.</p>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 3,
        slide: 8,
        notes: `<p class="notes-text-sm">USAR members are entitled to accrued leave while serving on AD status/orders for more than 30 days. They have a career limit of 60 leave days althougth this does not apply to leave earned during CONOPs. Soldiers will not be extended past the mobilization order separation/REFRAD date solely to use any leave
        <br><br>RC Soldiers may only sell back carried over leave at separation/REFRAD from active service, at discharge (including transfer to the IRR) or retirement, if the separation or release if under honorable conditions. RC Soldiers cannot sell back carried over leave at any other period
        <br><br>Soldiers can carry more than 30 days of leave when changing status from AC to TPU or TPU to AC/AGR. Soldiers returning from mobilization don’t have to sell their leave, they have the option to take their leave bfore returning to their TPU status.
        <br><br>Exceptions to the 60-Day Career Leave Payment Limitation: •Contingency Operations.
        •Active Duty of 31 to 365 Days
        •Death on AD
        •Career leave payment total
        <br><br>Leave is prorated for partial months. .5 for every 1-6 days over 30 days of duty
        The 60-day leave payment limitation does not apply to leave accrued by a member of a RC while serving on AD, full-time NG, or ADT during a period of more than 30 days, but not more than 365 days, beginning on/after October 1, 2001</p>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 3,
        slide: 9,
        notes: `There are different forms that are utilized by the USAR depending on the action you are trying to process. Some of the most common pay forms are:
        <br><br>1. DA Form 1380 is a record of individARAl performance for reserve duty training. This form is required to process any pay transaction out of the Battle Assembly time frame.
        <br>2. USAR Form 22-R is the form the USAR use to request any pay grade corrections.
        <br>3. USAR Form 24-R is used to request payment of any accrued leave for USAR members.
        <br>4. USAR Form 25-R is a USAR form that is used to certify any duty performance greater than 30 days.
        <br>5. USAR Form 26-R is the Reserves Transmittal Letter (TL).
        <br>6. USAR Form 27-R is the Reserves Pay Inquiry Form.
        <br>*Note
        <br><br>Forms can be downloaded at https://www.usar.army.mil/Publications/
        <br>USAR Pay E-Message may be found at
        https://xtranet/usarc/g8/pay/Pay%20Messages/Forms/AllItems`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 3,
        slide: 10,
        notes: ``,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 3,
        slide: 11,
        notes: `Summarize the main topics addressed in the lesson. Address questions from the lesson that needed additional research. What other questions did they have?`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 1,
        notes: `Introduce yourself as the instructor and read the title of the lesson.
        <br><br>Ask students: “Has anyone experienced a new Soldier that has had an issue with their prior service years being reflected on their LES?”`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 2,
        notes: `Outline the lesson objectives to the students.
        <br><br>Upon successful completion of this lesson, you will be able to determine the basic pay for a Soldier and how to submit proper documentation to fix potential discrepancies. Lets look into a common scenario.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 3,
        notes: `The process starts with the Soldier submitting a pay inquiry on the DA Form 2142 to the HR. A Pay Inquiry submitted by a Soldier shows the initial contact between the Soldier and the HR professional. The scenario on the Pay Inquiry is an example of how a Soldier has brought his issue to the servicing S-1. This pay inquiry shows that the Soldier is prior service, but may not be getting paid correctly to reflect their prior service years.
        <br>Ask students: “What is the next step in this process?”`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 4,
        notes: `The first step is conducting research on behalf of the Soldier to verify the validity of the pay inquiry. A MS-51 screen shot shows three separate systems and any potential miscommunication between systems. The MS-51 screen shot is found in EDAS. There may be an issue with one particular system- either eMILPO, DJMS-AC or TAPDB-AC. eMILPO, which stands for Electronic Military Personnel Office. TAPDB-AC is the Total Army Personnel Data Base. DJMS-AC it the Defense Joint Military Pay System- Active Component, commonly used by Finance.
        <br><br>For this particular Soldier, we found that there is, in fact, a discrepancy with his basic active service date. All systems should have the same date for all corresponding information. After researching, we found that DJMS-AC system has a different date than eMILPO and TAPDB. To ensure we have the correct date, we need to do some more research. We will ask the Soldier to provide their enlistment contract, DD 214 or other Key Supporting Documents (KSDs). Another option is to go to their Interactive Personnel Electronic Records Management System (IPERMS) to verify their prior service dates by looking at the KSD’s there.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 5,
        notes: `Here we have obtained one of the required KSDs, which is their enlistment contract. This document shows when they entered into the service. Their Basic Active Service Date (BASD) should be calculated off of their enlistment contract. We will use the dates listed on this form for our next step. Once we have the dates calculated on the next form, we will have the appropriate dates that should be reflected in each of the three systems on the MS-51. Once all three are lined up, the Soldier will be paid appropriately in accordance with his KSDs. One or all of the following will need to be obtained to use when preparing the DA 1506:
        <br>Enlistment/Reenlistment Contract
        <br>DD Form 214, Certificate of Release or Discharge Orders`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 6,
        notes: `After obtaining their KSDs, you will have the appropriate dates and information to fill out the DA 1506. Once this form is completed, along with their KSD’s these documents will be submitted to your Finance Office for futher processing.
        <br>Ask Students: “How will this be submitted to Finance?” <br><br>Correct answer should be “UTL”`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 7,
        notes: `Soldier’s documents are submitted to the Defense Military Pay Office (DMPO) on a Unit Transmittal Letter (UTL) for further processing. Not all UTLs will look like this, however it must have all the basic information. For example: name, last 4, pay transaction document, date, signature, etc.
        <br><br>Ask students: “Once you list all the documents on the UTL, and you turn it in to finance, what will you need to check next?”`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 8,
        notes: `<p class="notes-text-sm">The Unit Commander’s Finance Report (UCFR) is provided to Unit Commanders on a monthly basis and must be certified. Commanders are to ensure that their Soldiers’ pay account is accurate. Take time to point out on the UCFR where they can find allotments.
        <br>Ask the students: “What is another way to verify the action has been processed.” Their response should be “LES”.
        <br>To ensure we have the steps correct, lets pose this scenario:
        <br>A Soldier approaches you, the HR Professional and says:
        <br>“I was prior service Army and got out as an E-5 a couple years ago. I came back in last month, and they let me keep my rank but I’m not getting paid with the 7 years of service I have. My LES says 0 years.”
        <br>What questions would you ask initially from the Soldier?
        <br>Did you have a break in service?
        <br>What documents do you have that show your prior service?
        <br>What documents do you request from the Soldier to verify years of service? <br>Initial Enlistment Contract
        <br>DD214
        <br>Current PCS Orders
        <br>If the Soldier does not have these readily available, where could you potentially obtain these documents?
        <br>Soldiers OMPF
        <br>What form would you need to correct the administrative error to adjust the 0 years of service to reflect 7 years of service?
        <br>DA 1506
        <br>Now that we have covered this scenario, lets go over basic pay terminology you may encounter</p>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 9,
        notes: `During this lesson we will discuss different types of terminology and what to look for and be aware of. With Soldiers all coming from different backgrounds, be aware that there will be differeing terminology. On this slide we see that the different branches use different terms to identify pay entry base date. This is important to know for when you are verifying their KSD’s with the DA 1506 before submission to your Finance Office.
        <br><br>The Army refers to this date as the Pay Entry Basic Date (PEBD); the Navy and Marine Corps call this the pay entry base date; and it is known by the Air Force as the pay date. Military pay and personnel systems use a variety of dates to determine various entitlements. Pay dates are extremely important because in many cases they determine the amount of pay a member will receive (longevity).`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 10,
        notes: `There may or may not be instances where Officers have to compute for their previous enlisted time as a regular enlisted Soldier. Depending if they meet this specific time criteria, they may be entitiled to additional pay. Commissioned officers with over four years of prior active service as an enlisted member, warrant officer, or combined service in both grades are entitled to count such service for purposes of computing basic pay for longevity purposes.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 11,
        notes: `All Soldiers are paid on a 30 day calendar basis. Even if a month has only 28 days, such as February, Finance will compute the days as if it was a 30 day calendar month. When determining date periods, always include the inclusive day. This inclusive day accounts for the first day that the service and pay period began.
        <br>To compute creditable service we must take some basic rules into account:
        <br><b>Beginning Date:</b> Most recent entry date on active duty, with or without a break in service.
        <br><b>Ending Date:</b> Last day of the latest period of service.
        <br><b>Year:</b> 12 months (360 days by military calculations)
        <br><b>Month:</b> 30 days regardless of actual number of days in that month.
        <br>For example: February has 28 days. We will convert 28 to 30 when computing creditable service.
        <br><b>Day:</b> Basic unit of service time
        <br><b>Inclusive Date:</b> The one day that is added to each period of completed service preceded or followed by a break in service after subtracting the beginning date from the ending date.
        <br>The inclusive date is very important. Do not forget the inclusive date when computing service dates.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 12,
        notes: `When we are trying to determine base pay - start with the Soldiers grade followed by their years in service. DFAS.mil has the appropriate pay chart.
        <br>Navigate at this time to the pay chart located at: https://www.dfas.mil/militarymembers/payentitlements/Pay- Tables/PayTableArchives.html)
        <br>Pay Rate = Pay Grade + Longevity or Years of Service
        <br>All allowances are based on the 30 day month regardless of the number of days in the month.
        <br>This is how to compute:
        <br>Take the Basic Pay divided by 30 days = the daily rate The Daily rate x days authorized = the monthly amount
        <br>The inclusive day must be added to the days authorized. We will cover the inclusive day in a later slide.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 13,
        notes: `Now that we have the formula for figuring out basic pay, lets take a look at SSG Bruce. We want to know how much base pay will the service member be authorized in June of 2019. SSG Bruce has 8 years of service. First step is navigating to the pay chart for the year 2019 and finding his grade versus years in service column.
        <ol>
        <li>Step 1 - Based off of this information, we found that his Base Pay is $3543.30.</li>
        <li>Step 2 - We take this amount and divide by 30 to find the daily rate. This yields a daily rate of $118.11.</li>
        <li>Step 3 - Take the day they entered and subtract it from 30. SSG Bruce entered the military on the 14th of June Here’s how to calculate: 30 days minus 14 days = 16 remaining days.</li>
        <li>Step 4 - do not forget to add your inclusive day *You must add 1 day (inclusive day) = 17 days total.</li>
        <li>Final step- Calculate the montly prorated amount. The 17 days he was credited times (X) the daily rate for a SSG with 8 years in service of $118.11 = $2007.87.</li>
        </ol>
        Next you will have one that you will conduct on your own.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 14,
        notes: `SFC Clark with 10 years of service entered active duty 20 April 2019. How much base pay will the service member be authorized in April? This example shows the first step for you to get you started. Take the next 5 minutes to complete this on your own.
        <br><b>(Instructor Note: give students approx. 5 minutes to complete. After 5 minutes has elapsed- have a student walk you thru their steps they took to achieve their final answer. Click thru the steps as you read them)</b>
        <br>Here are the steps you should have taken to get to the authorized amount:
        <br>SSG Clark has 10 years of service and entered active duty on 20 April 2019.
        <ol>
        <li>First we found his Base Pay was $4071.60 which yields a daily rate of $135.72</li>
        <li>SSG Clark entered the military on the 20th of April therefore he is authorized 10 days of pay (20-30 April).</li>
        <li>How to calculate: 30 days minus 20 days = 10 remaining days.</li>
        <li>You must add 1 day back in order to account for the inclusive day which is now 11 days.</li>
        <li>11 x $135.72 = $1492.92</li>
        </ol>
        Lets move on to determining creditable service.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 15,
        notes: `What is creditable Service? Creditable service is service which is creditable which include active or inactive service.
        <br>When computing Creditable Service there are three components that must be considered:
        <ol><li>Basic Pay Date</li>
        <li>Creditable Service before basic pay date ( Drill Time, Simultaneous Membership Troop Program *ROTC)</li>
        <li>Lost time if any ( AWOL, Desertion, etc...)</li></ol>
        <br><b>Break in Service</b>
        <br>Time between periods of service that, due to expiration of enlistment, release from AD, or discharge, is not counted as creditable service
        <br><b>Lost Time</b>
        <br>Period of time that, due to unauthorized absence, is not included in determining cumulative years of service for all military purposes.
        <br>What are some examples that come to mind when we talk about “Unauthorized Absence?”
        <ul>
        <li>AWOL</li>
        <li>Desertion</li></ul>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 16,
        notes: `The regulation that covers types of creditable service is covered in the Department of Defense Financial Management Regulation Vol 7a starting in chapter 01.
        <br>In chapter 01 of the DOD FMR, it lists different types of creditable service without restrictions, other creditable servive with restrictions and constructive service. Utilize this chapter when reviewing your Soldiers KSDs before annotating dates on the DA 1506.
        <br>Let us look into the first one on this list.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 17,
        notes: `Creditable Service Without Restriction is direct creditable service. For example, Active Duty, National Guard etc. Persons who have served in these examples are individuals who would fall under the category of without restrictions.
        Next we have creditable service with restrictions.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 18,
        notes: `The following are examples of creditable service with restrictions:
        <o><li>Service on a military service retired list, temporary disability retired list, honorary retired list of any uniformed service, or service as a member of the Fleet Reserve or Fleet Marine Corps Reserve</li>
        <li>Any period of service during which a member is entitled to retired, retirement, or retainer pay from any uniformed service</li>
        <li>Service terminated by desertion or dishonorable discharge, unless the enlistment was fraudulent or was voided for that reason</li>
        <li>Service as an enlisted member in a Reserve Component, including Ready Reserve, inactive and active, under the Delayed Entry Program (DEP), before beginning AD or an initial period of active duty for training, provided the Reserve enlistment was entered into before January 1, 1985</li></ol>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 19,
        notes: `There are certain personnel that may qualify for constructive service. These personal are medical and dental officers that can be given extra credit for longetivy purposes. It reflects the time they spent in medical or dental school.
        <br>The terms you see on this slide that you may not be familiary with are: 
        <br><b>AFHPS</b> = Armed Forces Health Professional Scholarship
        <br><b>DOM </b>= Doctor of Medicine`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 20,
        notes: `In general, service that is not listed as creditable service cannot be used to compute a basic pay date. Do not use any service that is not listed as creditable service to compute a basic pay date. The following list includes a few types of service that are not creditable:
        <ol><li>The time served in an enlistment that is terminated, voided, or invalidated as fraudulent</li>
        <li>The time served as a commissioned officer in the Philippine Army</li>
        <li>The period of time a member was on the Emergency Officers’ Retired List </li><li>The time an individual was a member of a state, home, or territorial guard</li></ol>
        <br>The term you see on this slide that you may not be familiar with is: 
        <br><b>USUHS </b>= Uniformed Services University of Health Sciences`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 21,
        notes: `Prior to February 11, 1996, a commissioned or warrant officer was entitled to credit for one day in a commissioned or warrant status, without regard to absence of any kind, whether authorized or unauthorized, and including confinement prior to and during trial.
        <br><br>After February 10, 1996, a commissioned or warrant officer cannot count periods of absence for any purpose other than service, for basic pay computations for desertion, absence from duty more than one day without proper authority, confinement for more than one day in connection with a trial, or the officer’s inability to perform for more than one day due to disease or drugs.
        <br><br>To determine the creditability for absence while in enlisted status, refer to the DoDFMR Volume 7A, Chapter 1, Table 1-2, Absence From Duty in Enlisted Status. For Enlisted, if the command determines that the absence is excused as unavoidable then it is creditable service.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 22,
        notes: `Let’s take a look at how Absence Without Leave (AWOL) affects a Soldier’s creditable service
        <br><br>Lost time is the period of time that, due to unauthorized absence, is not included in determining cumulative years of service for all military purposes. When a member has lost time, creditable service is computed separately for the period served.
        <br><br>In a non-pay status, 1/30 of one month’s pay for each day’s absence is deducted. No pay is lost for unauthorized absence on the 31st day of a month, except when it is the first day of absence or when a member is paid for the day under service of less than 30 days as described previously.
        <br><br>Absence in a non-pay status on February 28 in a non-leap year results in loss of pay for 3 days. If a member is absent only on the 28th day of February in a leap year, the pay for 1 day, the 28th, is deducted. Absence in a non-pay status on February 29 in a leap year results in loss of pay for two days. When payment is made under service of less than 30 days, based on each day actually served, deduct only for the actual period of unauthorized absence`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 23,
        notes: `Here is an example of what the DA 1506 would look like with the dates given to you from the previous slides. As you can see in block 6 and 7 (FROM and TO), the DA 1506 requires that you format the dates in 2 digit year month and day format. The beginning dates will be lined up directly across from the end date.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 24,
        notes: `Step 1: List and add all beginning dates of service for each separate period of service by year, month, and then day
        <br><br>Step 2: List and add all ending dates by year, month, and day. Change the 31st of the month to 30, or the 28th in non leap years to 30.
        <br><br>Note that February 28, 1974, changes to February 30, 1974, since 1974 is not a leap year. This is because it is the LAST day of the month, and if it is the last day of the month, it must read as “30”. We calculate based off of a 30 Day calendar. March 31, 1988, changes to March 30, 1988. The 31st was adjusted to read 30. This is because it is the LAST day of the month, and if it is the last day of the month, it must read as “30”. We calculate based off of a 30 Day calendar.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 25,
        notes: `<p class="notes-text-sm">Instructor Note: Each step will appear in an animation. Click next when word (NEXT) appears, then give instruction that follows.
        <br>Taking the total numbers we added up from the previous slide, we need to simplify it down to an appropriate creditable service time frame. Starting with the total ending date minus the total beginning date. Working right to left we begin with 90 days minus 04 days.
        <br>(NEXT)
        <br>Total of 86 days. Now we must take 16 minus 19. There is a problem with subtracting a large number (19) from a smaller number (16) in the month column. Before arriving at the total, another step must be performed in order to do the subtraction correctly for the months.
        <br>(NEXT x3)
        <br>It is necessary to borrow a year, or 12 months, from the year column, as shown above. When the Year beginning number is reduced by one (year), it will add 12 months to the month column (16+12=28). After subtracting we have the following totals. (NEXTx2) Inclusive days must be accounted for. It is necessary to add one day for each period to the day column before the day total is computed. In this example, we had four separate periods of service, so four days (NEXT) are added to the total number of days to account for both the first and the last day.
        <br>(NEXT)
        <br>Convert the DAYS and MONTHS if they can be simplified down. There are 30 days in a month. So we are able to take the 90 days and turn that into 3 equal months. The DAYS will turn to 0 and we will add the 3 months to the months column.
        <br>(NEXT)
        <br>We can simplify even further now that we have 12 months in the MONTHS column. Take those 12 months, convert to 1 year and add that 1 year to the year column. Our total is no 21 years 0 months and 0 days of creditable service.</p>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 26,
        notes: `Check on Learning:
        <br>Question 1 - Paragraph 010201D.12 of the DoDFMR.
        <br>Question 2 - Paragraph 010202A.6 of the DoDFMR. <br>Question 3 - $2535.60 each month`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 5,
        slide: 27,
        notes: ``,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 1,
        notes: `<b>Introduce the lesson and engage the class by asking questions:</b> “Who has experience with PCSing?” or “What can you tell me about your entitlements while your in a PCS status?”`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 2,
        notes: `Outline the lesson objectives to the students. Upon successful completion of this lesson, they will be able to explain lesson objectives.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 3,
        notes: `<b>Ask audience to provide example of different PCS situations,</b> What are their experiences? “What are the different types of PCS?”
        <br>CONUS to CONUS
        <br>OCONUS to CONUS
        <br>CONUS to OCONUS
        <br>OCONUS to OCONUS
        <br>Unit transfers
        <br>Define the reasons why we PCS. Enhance national security – Readiness and deployment. Compassionate reassignment – Service member relocate because of EFMP. Equitable treatment – Fair treatment across the Army to ensure that Soldiers are well rounded (TRADOC to FORSCOM). Generally, movement of a military member that would cause a second or later PCS in one Fiscal Year (FY) is not permitted, notwithstanding any other policy or exception as authorized under military regulations.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 4,
        notes: `The most common type of PCS is moving from one permanent station to another or intra-post transfers along with the DA Form 4187.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 5,
        notes: `Dependent Travel: Concurrent: Allows you and your family to travel together to your next permanent duty station. Deferred/ Delayed: Your family is not allowed to travel with the Soldier. They will travel at a later date after the Soldier has acquired family quarters. All of this is determined by your orders. Member married to member or Married Army Couples Program (MACP).`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 6,
        notes: `These are specifying situations when service member’s travel and transportation is not authorized. PCS entitlements are not authorized while serving in the following conditions. JTR 050405 Table 5-8`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 7,
        notes: `There are two types of PTDYs when PCSing:
        <br>1. Home Town Recruiting Assistance Program (HRAP) <br>2. House hunting
        <br><br>“Who has had experience with HRAP?”`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 8,
        notes: `The requirements for participation in the Army’s HRAP program is covered in AR 601-2. The DA Form 31 must be signed by LTC/05 or above (normally from Recruiting Command). Not government funded i.e. transportation pay.
        <br><br>“What is your experience with PTDY?”`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 9,
        notes: `The second type of PTDY is used for house hunting when relocating to a new duty assignment. The requirements for participation in the Army’s House Hunting program are: Covered in AR 600-8-10 (Leave and Passes Regulation). DA 31 must be signed by LTC/05 or above. Normally signed at departure of last duty station. If not new duty station will have to authorize Permissive TDY on a separate DA 31. Garrison Housing Officials no longer have to date stamp the DA Form 31 authorizing PTDY for House Hunting. Although, this is not the norm, the unit has the authority to call the Soldier back to duty when on PTDY and a residence is found under ten days.
        <br><br>“Who has ever been on the DTMO site?”`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 10,
        notes: `<b>Have students go to the website:</b> https://www.defensetravel.dod.mil/. These serve as a single focal point for commercial travel within the DoD. Have instructor highlight certain sections of the DTMO site. ie. DTS, Policies & regulations, allowance calculator without going into full depth.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 11,
        notes: `<b>Engage the class by asking questions: </b>“While you are on a PCS status, are you eligible for all these allowances, some of these allowance or no of these allowance?” Once in a PCS status, a Soldier could be entitled to some if not all of these entitlements. These entitlement will be covered later in this lesson`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 12,
        notes: `<b>Have students navigate to allowance calculator to the Per diem rate on the DTMO site:</b> Per diem rate Query. Then explain how Per diem rate works when Soldier PCS from point A to point B. JTR 053901. PCS Per Diem Allowance A per diem rate includes a maximum reimbursement amount for lodging expenses and a fixed amount for M&IE. Regardless of how much is spent on your travel a service member is only authorized a set rate for the time allowed/traveled lesser of the two. Travel Day Computation:Mileage determines the Per Diem amount the Soldier is authorized at the end of the day travel computation is based on what is more cost efficient for the government.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 13,
        notes: `Instructor inform students go to the Website:<br>https://www.defensetraveldod.mil/site/otherratesMile.cfm to look up the MALT rates. Soldiers are paid MALT when using POV from one official duty station to another. Example: PCS from Fort Stewart to Fort Bragg. Soldier will only be paid for Fort Stewart
        to Fort Bragg.Soldier will not be paid for VA because it is not an official PCS Location.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 14,
        notes: `1 day of travel is authorized if the ordered travel is 400 or fewer miles between official points. Divide by 350 to determine the number of authorized travel days if the distance is greater than 400 miles.
        <br><br>Note: Anything over .15 must be rounded to another day (computation). (JTR 050205) <br><br>“What other modes of travel can you utilized besides POV”?`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 15,
        notes: `Air: travel the maximum number of authorized travel (AT) is one day within CONUS (exceptions, case by case). Note: while PCS travel to Korea/Japan you get additional day of travel due to passing International Date Line (JTR: 020314). Bus: travel authorized actual time to travel between duty stations. Train: travel scheduled itinerary is used for AT purposes. Soldiers who use a mode of travel other than one authorized will be limited to actual time used but not exceed authorized time.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 16,
        notes: `<b>Have Students go to the Website:</b>
        <br><br>http://www.defensetravel.dod.mil/site/otherratesDLA.cfm to look up DLA rates. Paid when the soldier files their voucher after the PCS. Note: Single Soldiers without dependent who reside in the barracks are not authorized DLA`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 17,
        notes: `Once on a PCS status, a Soldier could be entitled DLA with or without dependent depending on Soldiers status and orders. Information is found in Table 5-11. Have instructor give students scenario based on the table. Ie Neither Service Member Has a Dependent, One Service Member Has a Dependent and the Other Has None and Both Service Members Have Dependents. JTR 050507: the Service member is eligible for secondary DLA if the Service member or a dependent has moved from the place of residence before the date the order is amended, modified, canceled, or revoked. JTR 050508: Service member ordered to occupy or vacate family-type Government quarters due to privatization, renovation, or any other reason for the Government’s convenience must be paid a partial DLA. A Service member relocated due to a PCS is not eligible for a partial DLA`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 18,
        notes: `<b>Inform the students </b>of the policy change stated in the Army Military Pay E-Message 19-061. This change states that Soldiers are eligible for advance DLA regardless whether they posses GTC or not. Ask students: Why do you think the Army changed this policy?`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 19,
        notes: `TLE has limitation of 10 days for CONUS. It can be used between duty stations for example a Soldier can use 3 at OLD PDS and 7 at New PDS. CONUS going to OCONUS is authorized only 5 days. It can be extended up to 60 days if major disaster or other circumstances outside of the Soldier’s control`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 20,
        notes: `Table 5-12: Eligibility Criteria for the TLE Authorization/Not authorization. Have students go to the table to see when TLE is authorized and not authorized.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 21,
        notes: `“If a service member is residing with friends or relatives, Soldier will not be authorized lodging, but will receive Meals and Incidentals (Daily Food Allowance)”. For member to member rule, <b>Have students go to the Website:</b> https://www.defensetravel.dod.mil/site/faqdual.cfm. Under Dual Allowances Frequently Asked Questions; “Is TLE affected”? Yes. A service member married to service member occupying temporary quarters for more than 5 or 10 days (see JTR, par 050601) can maximize their reimbursement by claiming TLE for different days:
        <ol><li>Each may be reimbursed up to $290 per day</li>
        <li>Both may not claim the same (other) dependent(s) for TLE on the same days</li>
        <li>One service member may not claim the others service member for TLE payment </li>
        <li>The statutory maximum limit is 10 days for CONUS or 5 days OCONUS PDS
        assignments (see JTR, par. 050601 and Table 5-13)</li></ol>
        <br>“Can you tell me the difference between TLE and TLA?"`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 22,
        notes: `TLA is intended to partially pay a Service member for higher than normal expenses incurred by a Service member or dependent while occupying temporary lodging OCONUS. OCONUS TLA is available when it is necessary for a Service member or dependent to occupy temporary lodging upon arrival at, or immediately before leaving.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 23,
        notes: `Additional periods of authorization cont.
        <ul><li>Acts of fire, flood, earthquake, riot, civil unrest, or other disturbances</li>
        <li>Withdrawal of private sector housing from the market</li>
        <li>Hospitalization or the duties away from the PDS resulting in curtailment of opportunities to arrange for permanent housing</li></ul>
        Most OCONUS assignments are based on housing availability TLA can be paid up to 60 days. Soldiers and dependents are authorized TLA. There are other circumstances of extended authorization: Floods to quarters, or Non arrival of house hold goods (JTR 090306). Have Students go to the Website for the OCONUS rates: https://www.defensetravel.dod.mil/site/perdiemCalc.cfm.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 24,
        notes: `Answer: 1 (DoDFMR Table 5-2 Rule 1)
        <br>Answer: 10 (DoDFMR Table 5-13 Rule 3 & 4)
        <br>Answer Air, Bus, Train and Ship (JTR 050202)`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 25,
        notes: `Based on GTC Regulation 040101. The Department of Defense (DoD) policy is that the Government Travel Charge Card (GTCC) will be used by all DoD personnel (military or civilian) to pay for all costs related to official government travel. See Section 0406 for exemptions to mandatory use. For more details on the (GTCC) https://www.defensetravel.dod.mil/site/govtravelcard.cfm.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 26,
        notes: `The purpose of an advance payments is to provide funding to a service member for extraordinary expenses due to a government-ordered relocation. The advance is intended to assist the service member with the out-of-pocket expenses, not typical day-to-day military living, that precede or exceed reimbursements incurred in a member’s change of duty location. An advance of pay is not authorized for the specific out-of-pocket expenses covered by advances of other allowances and entitlements. For all the mandatory advance pay deductions it is found in the DoDFMR Table 32-1 Note 3 and 4.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 27,
        notes: `Example of Advance Pay Computation
        <ol><li>Soldiers Base Pay is $3,543.30</li>
        <li>Add all deductions together total $917.10</li>
        <li>Subtract Step 1 from Step 2 equals net pay $2,626.20 (1 month net pay)</li> <li>Two months advance = $2,626.2 x 2 = $5252.40</li></ol>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 28,
        notes: `The supporting documentation for advance pay is DD Form 2560 and the Soldiers orders.
        <br>Part 1:
        <br>Block 1-3: self explanatory
        <br>Block 4: amount requested no more then 3 months
        <br>Block 5: 12 or less not to exceed 24 months
        <br>Block 6: within 30 days of PCS not to exceed 180 days of arrival to new PDS
        <br>Part 2:
        <br>Block 7: Itemized expense based off local policy
        <br>Block 8: Itemized amount
        <br>Block 9: total amount requested
        <br>Part 3:
        <br>Block 11: number of dependents
        <br>Part 4:
        <br>Block 13 and 14: sign and date, based of local policy
        <br>Part 5: Approval of members Commander: signed by Company Commander (E-3 and below) and based on local policy (can add to regulation). The payment of an advance can be received no earlier than 30 days prior to departure and no later than 60 days after arrival at the new PDS. Under extenuating circumstances and with the commander’s approval, an advance can be paid not exceed 90 days prior, and to not exceed 180 days after arrival. The member must provide written justification indicating the specific circumstances requiring the early or late advance payment.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 29,
        notes: `If a Soldier is separating, the repayments will be accelerated or collected as a lump- sum payment. For recoupment advance pay refer to DoDFMR Table 32-2 for more details.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 30,
        notes: `True or False : There are two types of Permissive TDY (PTDY) in regards to PCS. Answer: True (AR 600-8-10)
        <br>DoD Government Travel Card (GTC) Program provides travelers an effective, convenient, and commercially available method to pay for __________related to official travel. Answer: Expenses (GTC Regulation 040101)
        <br>True or False An advance payment is to give funds to a member to meet extraordinary vacation expenses. Answer: False (DoDFMR 320201)`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 7,
        slide: 31,
        notes: ``,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 1,
        notes: `“For the next lesson, we will learn about the two types of allotments.”
        <br><br>Ask the class: “Who has experience with an allotment?” or “What can you tell me about allotments?”`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 2,
        notes: `Outline the lesson objectives to the students: “Upon successful completion of this lesson, HR professionals will be able to explain the general provisions governing allotments of pay; describe types of allotments; outline eligibility requirements for military pay allotments; and explain the effect an allotment can have on pay.”
        <br><br>Ask the students: “What is the first step in assisting a Soldier?” <br>Answer: Step 1 Pay Inquiry`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 3,
        notes: `“The process starts with the Soldier submitting a pay inquiry on the DA Form 2142 to the HR. A Pay Inquiry submitted by a Soldier shows the initial contact between the Soldier and the HR professional. The scenario on the Pay Inquiry is an example of how a Soldier can request assistance with starting an allotment.”
        <br><br>“How can this Soldier change his allotmentt?” or “What is the most effect tool a service member has to start, stop, or change an allotment?”
        <br><br>Answer: MyPay. My pay is an efficient and convenient way to effect a service member’s pay account.
        <br><br>Ask the students: “What is the next step in this pay process?” <br>Answer: Step 2 Research`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 4,
        notes: `Put emphasis on the importance of researching through the DoDFMR for the rules on allotments of pay.
        <br>Ask the students: “What is the next step in this pay process?” <br>Answer: Step 3 Key Supporting Documents (KSD)`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 5,
        notes: `<p class="notes-text-sm"><i>“Step 3 identifies the Key Supporting Documents (KSD) essential to the Military Pay (MilPay) process procedure and audit readiness. In order to start an allotment a DD Form 2558 will have to be submitted though the local Defense Military Pay Office (DMPO).”</i>
        <br>Authorization to Start, Stop, or Change an Allotment, DD Form 2558 is explained in further detail below:
        <br><b>Block 1-2 and 4-6:</b> Personal data.
        <br><b>Block 3:</b> Depending on your local DMPO provide social security number (SSN)
        <br><b>Block 7:</b> Four digit year and two digit month in which the allotment will be deposited into an account. For example: It is November 15th and the service member would like the first payment to be deposited into the account on the December 1st. The effective date will be 201912. If the service member has enough end of month pay then all of the allotment will be deducted and deposited on December 1st. Another scenario: It is November 15th and the service member would like the first payment to be deposited into the account on January 1st. The effective date will be 202001. Half of the service member’s allotable pay will be deducted midmonth and the other half will be deducted end of month to be deposited on January 1st.
        <br><b>Block 8: </b>Total amount to be deducted for the month
        <br><b>Block 9: </b>Name of whom the money is given to
        <br><b>Block 10:</b> Allotment action; start, stop, or change
        <br><b>Block 11:</b> Even if a Soldier annotates a certain amount of months the allotment will still continue until another DD 2558 is submitted to stop/change the allotment
        <br><b>Block 13: </b></b>Allotment type must be checked
        <br><b>Block 14: </b>Must put the allotee mailing address
        <br><b>Block 17:</b> Must put the name of bank and routing number
        <br><b>Block 18: </b>Account number and type of account (checking/savings). It is important to inform the Soldiers, that if the account number does not belong to the allottee however it is an active/valid account THEN the allotment will be processed.
        <br><b>Block 21-22: </b>Service member must sign and date the document. <br><b>Ask the students:</b> “What is the next step in this pay process?”
        <br>Answer: Unit Transmittal Letter (UTL).</p>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 6,
        notes: `Soldier’s documents are submitted to the DMPO on a UTL for further processing. Not all UTLs will look like this, however it must have all the basic information. For example: Name, last 4, pay transaction document, date, and signature.
        <br><b>Ask the students: </b><i>“Once all the documents are listed on the UTL, and it is turned it to finance what is the next step?”</i>
        <br>Answer: Daily Registry of Transaction (DROT)`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 7,
        notes: `The Daily Registry of Transaction (DROT) is the unit’s receipt of transactions processed by the DMPO, which provides the status of each entitlement that was actioned. Interact with the class by asking: <i>“What status informs you that the action has been processed?”</i>
        <br>Answer: PROC means processed. <br>Status Codes explained:
        <br><b>REJ:</b> Transaction rejected in the system. Normally due to incorrect or overlapping information.
        <br><b>PROC:</b> Transaction is processed correctly in the system.
        <br><b>RECY:</b> Transaction recycled in the system. Normally seen if the effective date of
        the action is in the future.
        <br><b>Ask the students:</b> <i>“How would you verify the action is reflected on the Soldier’s pay?”</i>
        <br>Answer: UCFR or a soldier may check MyPay to review their LES.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 8,
        notes: `The Unit Commander’s Finance Report (UCFR) is provided to Unit Commanders on a monthly basis and must be certified. <i>“Commanders are to ensure that their Soldiers’ pay account is accurate monthly.” </i>Take time to point out on the UCFR where they can find allotments.
        <br>Inform the students: “In the remarks section located on the bottom of the Leave and Earning Statement (LES), a service member can see the effective date of the allotments.”
        <br><b>Ask the students:</b> <i>“What is another way to verify the action has been processed?”</i> <br>Answer: Leave and Earning Statement (LES)`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 9,
        notes: `“During this lesson we will discuss the basics of allotments. An allotment is a designated amount of money that is automatically distributed for you, from your pay.”
        <br><br>“There are two types of allotments: discretionary and non-discretionary. A discretionary allotment is a voluntary allotment that is set up by a member and may be stopped, started, or adjusted at will. Non-discretionary allotments may be voluntary or involuntary and they cannot be started or stopped at the member's will.”
        <br><br>“Many Soldiers use allotments in order to manage personal and family finances by allotting funds for their bills to a separate account. This ensures that at beginning of the month the funds are available to pay bills. Soldiers can allot money to an institution (as long as it's within the parameters of the DoDFMR 400303A; this will be discussed in slide 12), other people (rules discussed in slide 14), or the Soldier themselves.”
        <br><br>“The overall total that can be allotted will be that of the member’s pay minus all deductions”.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 10,
        notes: `Define the terms: allotment, allottee, and allotter. “An allotment is a designated amount of money that is automatically distributed for the Soldier, from their pay. An allottee is a person or organization that the money is going to. The allotter is the Soldier themselves.”
        <br><br>If you still see that some are confused, tie it together by providing this scenario: “SFC Clark (the allotter) wants to give $200 (the allotment) to his brother (the allottee).”`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 11,
        notes: `“Based on what you learned two slides ago; what is a discretionary allotment?”
        <br><br>Discuss discretionary allotments in more detail. <i>“Members are authorized no more than six discretionary allotments, which can be changed by the service member. Allotments can be started for the Savings Deposit Program, mortgage or rent payment (not privatized housing), dependents, relatives, divorced spouse, insurance premiums, and financial organizations.”</i>
        <br><br>Transition to the next slide by saying: <i>“Even though you can start an allotment to a financial organization, there are restrictions.”</i>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 12,
        notes: `Give the students a few minutes to pull the regulation: <i>“Take this time to pull up DoDFMR Vol 7A, Chapter 4200303A.”</i> Inform the students of the policy change stated in the DoDFMR 400303A. <i>“This change states that Soldiers are prohibited from starting a new allotments to purchase, lease, or rent personal property.”</i>
        <br><br>Some students might state that they have an allotment paying for a car or to a type of loan service like Rent-A-Center. Inform students: <i>“Any allotments that were started prior to the policy change are grandfathered and payments will continue. However, if the allotment stops it will not be able to be restarted.”</i>
        <br><br><i>“Allotments that exist on a member’s pay account prior to January 1, 2015 may continue. Members may also make changes to the amount of these allotments. If for any reason an allotment described in paragraph 420201 of the DoDFMR is stopped, the allotment is not authorized to be restarted.”</i>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 13,
        notes: `Discuss the limitations of non-discretionary allotments. <i>“These are involuntary allotments and cannot be changed by the Soldier on MyPay. Non-discretionary allotments are made for (list all above). An example would be Red Cross, the CFC, and Military Housing Privatization Initiative.”</i>
        <br><br><i>“Non-discretionary allotments are made to specifically designated agencies or for unique purposes. These allotments need to have specified start and stop dates, based on the length of time agreed upon with the agency”</i>
        <br><br><b>Ask the class: </b><i>“Does anyone contribute to CFC? If so how did you establish your donations? Relief organizations or the Combined Federal Campaign (CFC) are annual donations that must be renewed each year to continue payment.”</i>
        <br><br><b>Ask the class: </b><i>“Has anyone ever purchased a Savings Bond? The United States Department of the Treasury discontinued the purchase of paper savings bonds through federal payroll deduction effective October 1, 2010. However, military members may purchase electronic savings bonds by establishing a personal Treasury Direct account. This would initiate a non-discretionary allotment made payable to their Treasury Direct account.”</i>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 14,
        notes: `Explain the proper procedures and rules of how to start, stop and change allotments. Use this time to ask the student questions about what they remember about the DD form 2558.
        <br><br>Describe how someone who is not the Soldier could start, stop, or change an allotment on behalf of the Soldier (i.e. special power of attorney). <i>“Special Power of Attorney (SPOA) must clearly identify who can make adjustments on allotments. The power of attorney will be submitted along with the DD 2558 to the DMPO. A General Power of Attorney (GPOA) is not acceptable to start, stop, or change a member’s pay allotment.”
        <br><br>“Service members have the ability to control their own allotments (with a few exceptions):”
        <br><br>“An allotment is not made payable to a child under 16 years of age, but are made payable to the child’s appointed guardian or custodian. The spouse can be named as an allottee, regardless of age.”
        <br><br>“Allotments are not made payable to mentally incompetent persons, but are made payable to the appointed guardian or to the institution where a mentally incompetent person is confined.”
        <br><br>“Member awaiting trial by Court-Martial cannot register allotments between the date that a court-martial is ordered and the date of the approval or disapproval of the sentence. Also any standing allotments may be discontinued, when necessary. This is done to ensure that all of the forfeited (surrendered) amount is sufficiently deducted.”</i>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 15,
        notes: `<ol><li>A Soldier may start a maximum of ___ discretionary at any given time
        Answer: 6, DoDFMR Vol 7A, Chapter 400302</li>
        <li>True or False. Non-Discretionary allotments will continue for indefinite period of time.
        Answer: False, DoDFMR Vol 7A, Chapter 4006</li>
        <li>The chapter(s) of the DoDFMR, Volume 7A which contains information about the restrictions to allotments is chapter(s) _______.
        Answer: Chapters 40-43</li></ol>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 8,
        slide: 16,
        notes: ``,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 1,
        notes: `“Special pays are related to combat and incentives are rewards for unique training or duties performed. We all sacrifice everyday but some duties are considered more difficult, dangerous or even hazardous. Although we all volunteer everyday no one wants to be work with no pay. We will cover special and incentive pays which are in addition to the monthly salary.”`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 2,
        notes: `Outline the lesson objectives to the students: Upon successful completion of this lesson, you will be able to explain the general provisions governing special and incentive pays; describe the pay effects and eligibility requirements for numerous special pays.
        <br><br>Ask the class “What is the first step the Soldier must complete?” Answer: Pay Inquiry`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 3,
        notes: `This is the initial process to affect a Soldier’s pay. In this scenario, this Soldier is requesting HDP-L after being deployed for 45 days. Have class navigate to Chapter 17 to determine how they would answer the Pay Inquiry.
        <br><br><b>Ask the class:</b>
        <ol>
        <li>“Is the Soldier entitled to HDP-L?” Answer: Yes</li>
        <li>“What information is he missing on this pay inquiry?”
        Answer: TDY dates</li>
        <li>How much time does finance have to answer and return the pay inquiry to the Soldier/customer?” Answer: 72 hours</li>
        </ol>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 4,
        notes: `According to Chapter 17 he is authorized HDP-L because he said he was deployed for more than 30 days.
        <br><b>Ask the class:</b><ol>
        <li>“How do you determine what documents need to be completed to take care of the Soldier?”
        Answer: Check KSD Matrix
        <li>“Where can you find the KSD?”</li>
        Answer: Milsuite</li></ol>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 5,
        notes: `HR Professional obtains the orders (reflecting they are in the HDL) needed to justify the pay adjustment for audit purposes.
        <br><br><b>Ask the class </b>“What needs to happen with the orders to get the Soldier paid?” <br>Answer: Complete the UTL`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 6,
        notes: `We have identified in earlier lesson that the UTL is used as your tracking device. All of the Soldier’s KSD are submitted to the DMPO on a UTL for further processing. Not all UTLs will look the same but must include vital information.
        Make sure they are legible and can be read. Type information if necessary.
        <br><br><b>Ask the class </b>“What information should be displayed on the UTL?” <br>Answer: Name, last 4, pay transaction document, date, signature, etc.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 7,
        notes: `DROT is the unit’s receipt to identify if transactions have been processed, rejected or recycle by the DMPO, which provides the status of each document. The most common rejection is incorrect SSN. This is generated after the transaction has been processed in the system.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 8,
        notes: `The UCFR is provided to Unit Commanders on a monthly basis and must be certified. Commanders are to ensure that their Soldiers’ pay account is accurate. Soldiers can also verify their pay by checking their LES
        <br>UCFR was covered in Lesson 3.
        <br><b>Ask the class </b>“How can the Soldier verify the transaction has been processed?” <br>Answer: LES`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 9,
        notes: `There are three types of HDP established by The SecDef. HDP-L for location, M for mission and T for tempo. A Soldier may receive concurrent payment of HDP-M, HDP-L, and HDP-T for the same period. The most common is of the three is HDP-L.
        <br>Maximum monthly payment for all HDP is $1,500
        <br>Maximum HDP-L and HDP-M is $150 per month
        <br>Maximum HDP-T $500 per month
        <br>HDP-L $100 + Hazardous Fire Pay / Imminent Danger Pay (HFP/IDP) $100 but may not exceed $325
        <br><br><b>Ask the class </b>“Of the 3 types of HDPs, which is most common in the Army and why?” <br>Answer: HDP-L because of the high deployment rate`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 10,
        notes: `HDP-L is for location which is the most common incentive pay that people have knowledge of due to the high volume of deployment most are familiar and call it deployed entitlement. It is payable to members for either permanent change of station or temporary/deployed/attached duty of over 30 days based on a specified locations.
        <br><br>The purpose of this entitlement is to pay Soldiers conducting operations in specific locations identified on figure 17-1 because the living conditions are considered to be below normal conditions within the U.S.
        <br><br>The max entitlement is $150 prorated monthly. As of February 1, 2007, if a member in receipt of HFP and/or IDP, then the maximum amount of HDP-L is $100.
        <br><b>Have the students navigate to Figure 17-1</b>
        <br><b>Ask the class </b>“How much is (Armenia) entitled to?” <br>Answer: $150`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 11,
        notes: `HDP-M is for mission. Soldiers performing investigative or remains recovery duty in a remote or isolated location to (including, but not limited to, areas in Laos, Cambodia, Vietnam, and North Korea) in the recovery of U.S. Service member remains are entitled to receive a full month payment of $150 even if duty was conducted for one day.
        <br><b>Have the students navigate to Figure 17-1 to determine Designated Location and amounts</b>
        <br><b>Ask the class </b><br>“How much is (Belize) entitled to?” Answer: 150`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 12,
        notes: `HDP-T for tempo is for Soldiers spending excessive amounts of time away from their Permanent Duty Station. HDP-T receives the most money of the three, $500 prorated daily. It is primarily for Navy personnel often executing voluntary or involuntary rotations, to include extensions beyond established goals.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 13,
        notes: `<li>Anchorage, Alaska is authorized $_____ per month for HDP-L.
        <b>Answer: 0 DoDFMR Vol 7A Figure 17-1</b></li>
        <li>Bahrain is authorized $_____ per month for HDP-L.
        <b>Answer: 100 DoDFMR Vol 7A Figure 17-1</b></li>
        <li>Uganda is authorized $____ per month for HDP-L.
        <b>Answer: 100 DoDFMR Vol 7A Figure 17-1</b></li>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 14,
        notes: `Hostile Fire Pay will not be prorated. Members will receive the maximum monthly rate of special pay for the month in which the hostile fire or hostile fire mine explosion event occurred.
        <br>Certification of entitlement will be made at the lowest level of command that includes all the vessels, aircraft, or units subjected to the hostile fire or explosion of hostile mine incident.
        <br><br><b>Ask </b>“Is Hostile Fire Pay prorated or non-prorated?” Answer: Non-prorated <br><b>Ask </b>“What is IDP?” Answer: Imminent Danger Pay`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 15,
        notes: `Effective December 31, 2011, IDP is prorated not to exceed a monthly rate of $225 and payable in addition to all other pays or allowances except when receiving HFP.
        <br>When the airspace is specifically included in an IDP designation, members who perform official duty while flying over the area are eligible; even if they do not land in the area. Airspace not specifically designated as an IDP area, members who perform duty over the area are not entitled to IDP unless they land in the area.
        <br>A member is not authorized to receive concurrent payments for hostile fire and imminent danger duty.
        <br>Instructor Note: Have students navigate to DoDFMR Figure 10-1 to determine which countries authorized IDP
        <br><b>Ask</b> Is (Greece) entitled to IDP? Answer: No
        <br><b>Ask</b> “Is a service member authorized to receive concurrent payments for hostile Fire Pay and Imminent Danger Pay?” Answer: No (DoD 100201)`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 16,
        notes: `Service members must have been wounded, ill, or injured in a combat zone, and in a hostile fire area, exposed to a hostile fire event, and hospitalized for treatment. Service members may be considered hospitalized if their orders indicate attachment or assignment to a medical/patient unit for duty.
        <br><u>Pay and Allowance Continuation (PAC) program (for more info chapter 1302)</u>
        <br><b>Ask</b> “What are some limitations?” <br>Answer: TDY, Desertion, Leave`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 17,
        notes: `Absences from the IDP area include:
        <ul><li>A member, who takes leave in an IDP area that the member is not assigned for duty, is not eligible for the payment of IDP (subparagraph 100301.F.1).</li>
        <li>A member, who takes leave in an area not designated as an IDP area, is not eligible for the payment of IDP for the period of the absence.</li>
        <li>A member, assigned for duty in an IDP area that performs temporary duty in an area not designated as an IDP area, is not eligible for the payment of IDP for the period of absence.</li></ul>
        Check on learning`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 18,
        notes: `<ol><li>The country of Chad is authorized IDP in airspace.
        <br>Answer: False - DoDFMR Vol 7A Table 10-1</li>
    <li>Iraq was authorized IDP on:
        <br>Answer: Sep 17, 1990 - DoDFMR Vol 7A Table 10-1</li></ol>
        <br><b>Ask</b> “What are some examples of a duty with an extremely amount of difficult or
        unusual degree of responsibility?”
        <br>Answer: Recruiter/Drill Sergeant/Personal Security Detail/ White house Communications.
        <br><b>Ask</b> “Who is entitled to SDAP?” <br>Answer: Enlisted members only`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 19,
        notes: `SDAP or Special Duty Assignment Pay is authorized for duties considered to have an unusual degree of responsibility. SDAP is awarded according to the applicable regulations of the military service concerned.
        <br><b>Ask </b>“What is the purpose of AIP?
        <br>Answer: It’s an incentive pay a member may be entitled to for performing services in an assignment designated by the Secretary concerned.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 20,
        notes: `A type of incentive pay a member may be entitled to for performing services in an assignment designated by the Secretary concerned and is approved for such program (AIP) for under $1500 per month.
        <br>The member must be serving on active duty to be eligible for AIP. The Secretary concerned may require the member to enter into a written agreement in order to qualify for AIP. The written agreement will specify the monthly rate, and the period for which the member will be paid AIP.
        <br>Incentive pay paid under this section is in addition to any other pay and allowances to which the member is entitled, except as may be noted under each program. This payment may be made in a lump sum, installments, or monthly increments as authorized for each program. The maximum monthly amount of AIP payable to any service member may not exceed $1,500. Monthly pay will be prorated for partial months served, except as noted under each program.
        <br>A member is not entitled to AIP during a period of terminal leave which ends upon discharge or release of the member from active duty.
        <br>Service members are not authorized to receive more than one AIP simultaneously for the same period of service. If a Service member is eligible for more than one AIP, the higher dollar value AIP will be paid.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 21,
        notes: ``,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 22,
        notes: `<b>Ask </b>“What is FLPB?”
        <br>Answer: Foreign Language Proficiency Bonus`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 23,
        notes: `<b>Ask</b> “Is a service member entitled to be paid for more than one language? <br>Answer: Yes`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 24,
        notes: `Foreign Language Proficiency Bonus (FLPB) was established for officers and enlisted members receiving basic pay and certified by the individual service secretary, within the last 12 months, to be proficient in a foreign language. Each service secretary certifies FLPB annually based on:
        <ul>
        <li>Qualification in a career linguist duty specialty</li>
        <li>Attendance in specified training designated to develop proficiency </li><li>Assignment to military duties requiring foreign language proficiency </li><li>Proficiency in a foreign language deemed critical</li>
        The secretary of the military department concerned certifies a member’s level of proficiency annually. In addition, FLPB is payable in addition to all other pay and allowances. RC members who meet these same criteria can receive a prorated amount of FLPB`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 25,
        notes: `<ol>
        <li>The maximum monthly amount of AIP will not exceed ______
        <br>$1,500 (DoDFMR Vol 7A 150204)
        <li>Who establishes the eligibility criteria for SDAP?
        <br>The Secretaries of the Military Departments (DoDFMR Vol 7A 080201
        <li>True or False: The Secretary concern may pay FLBP to an AC member who is assigned to military duties requiring a proficiency in a foreign language.
        <br>True (DoDFMR Vol 7A 190202)</ol>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 26,
        notes: `This is a list of all Hazardous Duty Incentive Pays.
        <br>Experimental Stress Duty is the military example of human test dummies used for under water testing and construction.
        <br>Toxic Fuels is the usage of aircraft fuel.
        <br>Dangerous Viruses such as organisms and bacteria.
        <br><b>Ask:</b> What are the two types of Flying Duty: <br>Answer: Crew and non-crew`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 27,
        notes: `<b>Instructor Note: Have students navigate to Table 22-1 for Hazardous Duty Incentive pay for Flying Duty Rates</b>
        <br><b>Flying duty pay,</b> more commonly referred to as "flight pay", is the aviation incentive pay. Soldiers under competent orders who participate in regular and frequent aerial flights are entitled to flight pay.
        <br><b>HDIP for Flying Duty:</b> Crew member and non-crew member, for both officers (including warrant officers) and enlisted Soldiers. Refer to Table 22-7, 8 for AvIP
        <br><b>AvIP:</b> Entitlement to AvIP is designated for regular or reserve officers who hold, or are in training to, an aeronautical rating or designation and who engage and remain in aviation service on a career basis. For aviators, AvIP is a longevity based entitlement that is payable on a continuous or on a conditional (month to month) basis. The rates for continuous and conditional are equal and are based on longevity; Generally, you will not process AvIP in your day-to-day operations unless you are directed to terminate it by competent orders. Refer to paragraph 220201of the DoDFMR for AvIP for rated/designated officers and warrant officers.
        <br><b>Competent Orders :</b> Orders issued by the Secretary concerned, or such officer or officers as the Secretary may designate, to members of their respective Service or to members of other Services when such latter members are performing duty with a Service other than their own. Refer to paragraph 220201of the DoDFMR for AvIP for rated/designated officers and warrant officers.
        <br><b>Ask</b> “What is the requirement to receive Parachute Duty Incentive Pay or Jump Pay? Soldiers jumps once every 3 months
        <br><b>Ask</b> “What is the difference between Parachute Pay and Military Free Fall?”
        <br>Answer: Difference between the two regular is with a static line and Military Free Fall is without a static line.`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 28,
        notes: `<b>Instructor Note: Have students navigate to DoDFMR 7000.14-R Chapter 24</b>
        <br>If a Soldiers jumps once every 3 months they are entitled to Parachute pay of $150 not prorated but can’t be paid while one leave, TDY or PCS orders. Upon PCS’ing to a new duty station, entitlement to parachute pay is terminated the day of departure.
        <br>That jump qualifies the Soldier for that month plus two preceding months or for that month plus two succeeding months or for that month plus one preceding month and one succeeding month.
        <br><b><u>Example 1:</b></u> During the months October, November, and December, a Soldier performs 1 jump in December. Since the requirement is one jump every three months, the Soldier is entitled to pay for the entire three month period.
        <br>There are some exceptions such as if equipment or aircraft is damaged.
        <ul><li>It’s paid to Soldiers that perform duty involving parachute jumping at a high altitude with a low opening as an essential part of such duty. At a minimum, they must execute jumps at altitudes of greater than 10,000 feet with a free-fall to low altitudes before parachute opening.</li>
        <li>Qualifying Soldiers graduate from the U.S. Army Military Free Fall Course or a military service recognized equivalent course; receive a designation as a HALO parachutist, or are undergoing training for such designation.</li>
        <li>They are required by competent orders to engage in parachute jumping at high altitudes from an aircraft in aerial flight. Members must meet the requirements listed in Table 24-3.</li>
        <li>The monthly rate for a HALO parachutist, that qualifies is $225.00.</li></ul>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 29,
        notes: ``,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 30,
        notes: ``,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 31,
        notes: `<ol><li>Members who qualify for incentive pay for more than one type of hazardous duty may receive no more than __________ of payments for the same period.
        <br>Answer: 2 Types (DoDFMR Vol 7A 110304B1)</li>
        <li>A Soldier must jump _____ jump every 3 months in order to collect jump pay.
        <br>Answer: 1 (DoDFMR Vol 7A 240301B)</li></ol>`,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 9,
        slide: 32,
        notes: ``,
        links: ['link3.com','link4.com']
    },
    {
        lessonid: 11,
        slide: 1,
        notes: `For the next lesson, we will learn about the different types of Military Savings Programs. Before going over this lesson, please understand that we are NOT financial advisors. Army Community Services (ACS) provides educational and counseling programs for personal financial readiness. The military savings program were established to provide members of the uniformed services the opportunity to build financial savings. We will learn the three available savings programs.
        <br><strong>Ask:</b> “Can anyone name three savings programs in the military?”
        <br>Answer: Savings Deposit Program (SDP), Thrift Savings Plan (TSP), and Blended Retirement System (BRS)`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 2,
        notes: `Upon successful completion of this lesson, HR professionals will be able to explain the eligibility requirements and understand the three military savings programs: Savings Deposit Program, Thrift Savings Plan, and the Blended Retirement System. We will understand TSP guidelines for members under BRS and members who are not under BRS.`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 3,
        notes: `The Savings Deposit Program (SDP) was established to provide members of the uniformed services serving in designated combat zone the opportunity to build their financial savings.
        <br><strong>Take a moment to pull Vol 7A Chapter 510201.<br>To be eligible for the SDP, members must serve at least 30 days or 1 day for each 3 consecutive months serving in a combat zone, qualified hazardous duty area, or designated support area of a combat zone.
        <br>To view the current listings, click on the bolded designated direct support areas of a CZ, designated CZ, and Qualified Hazardous Duty Area (QHDA) on the note section of Chapter 510201. These 3 links will show eligible locations for SDP.`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 4,
        notes: `Members of the Armed Forces may deposit to SDP during tour of duty, no more than the member’s take home pay and a minimum amount of $5.
        <br>For example, the amount of money a member receives on payday (total midmonth and end of month) is what the member can deposit for that month.
        <br>The member may not accumulate back pay (stateside) prior to departing for a designated duty assignment in a QHDA area in order to deposit the back pay once the member becomes eligible for the SDP.
        <br>For example, if SFC Henry accumulates back pay for BAH prior to leaving for deployment and receives it during his tour; he will not be able to deposit that back pay to SDP.
        <br>For members in a missing status, the Secretary concerned may start, stop, or change allotments for SDP and authorize withdrawal, in the interest of a member or the member’s dependents, even though the member had an opportunity to make deposits and elected not to do so.
        <br>Deposits can be made by allotment, cash, check or eagle cash card.`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 5,
        notes: `Interest is 10 percent per anually, compounded quarterly at 2.5 percent.
        <br>No interest is paid on amounts more than $10,000, except on amounts for a member who is in a missing status.
        <br>If deposits are made on or before the 10th of the month, interest will be from the 1st of the month. Deposits made after the 10th of the month accrue interest from the 1st day of the following month.
        <br>In no case will interest accrue for a period longer than 90 days after the member's eligibility to make deposits terminates.
        <br>Interest earned from SDP is taxable.`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 6,
        notes: `Members should withdraw all funds 90-days after they return from deployment. If no withdrawal is made within 120 days, DFAS will automatically transfer the funds to the SDP account owner. Withdrawal requests can be made through MyPay, email, fax, or mail.
        <br>If a member is in a missing status, SDP withdrawals may be directed by the Secretary concerned when deemed in the best interest of the member, the member's dependent(s), or the U.S. Government.
        <br>Emergency withdrawals may be made only when the health or welfare of a member or dependent(s) were endangered, if withdrawals were not granted. Emergency withdrawals may be authorized by the member's commanding officer.
        <br>Amounts over $10,000.00 may be withdrawn quarterly at the member's request.`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 7,
        notes: ``,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 8,
        notes: `The Thrift Savings Plan (TSP) is a government sponsored retirement savings and investment plan for Federal employees and members of the uniformed services, including the Ready Reserve similar to a 401K.
        <br>A member may choose to start, stop, or change contributions to TSP at any time. Any change is effective at the end of the pay period.
        <br>Contributions must come from payroll deductions and members may choose the percentage of basic pay at a minimum of 1%.
        <br>If basic pay contributions are terminated, TSP deductions for bonuses, incentive pays, or special pays will also be terminated with the same effective date.
        <br>Is anyone contributing to the Thrift Savings Program? What is the difference between Traditional and Roth TSP?`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 9,
        notes: `A member may make traditional or Roth contributions to the TSP. Traditional TSP offers tax deferral advantages similar to 401(k). Roth TSP offers members the option of making after-tax contributions.
        <br>SFC Jones is currently contributing to the Traditional TSP, his contributions will not be taxed until he withdraws it.
        <br>CPT Adams is currently contributing to only Roth TSP, her contributions are taxed now, but will be tax free upon withdrawal.`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 10,
        notes: `A member age 50 years or older may make catch-up contributions to both Roth and traditional TSP accounts. Contributions must be made from basic pay and the amount of the catch-up cannot exceed the annual limit established by the IRS.
        <br>There are limits on how much you can contribute to TSP for the year.
        <br><strong>Ask: “What is the maximum amount a member can contribute for year 2020?”
        <br><strong>Answer: “$26,000 (this includes Catch-up contributions)”`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 11,
        notes: `This slide shows the guidelines on IRS limits while contributing to TSP. We will read this chart from left to right.
        <br>Left column shows the year, next column is the Regular Contributions which shows limit amounts for all members. Next is the Catch up contributions that shows the additional amounts for members 50 years and over. Far right column shows the combined total contribution for the year.`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 12,
        notes: ``,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 13,
        notes: `One of the key benefits of serving in the Uniformed Services is the retirement plan. The National Defense Authorization Act for Fiscal Year 2016 created a new retirement system for members of the Uniformed Services. This system is called the Blended Retirement System (BRS). It blends the traditional legacy retirement pension, with a defined contribution benefit with TSP.
        <br>There are two ways a member could be eligible for BRS. If a member entered military service on or after 1 January 2018, they are automatically enrolled into BRS. These members will be considered auto-enrolled BRS members.
        <br>The second way to be eligible for BRS is if a member opted in during calendar year 2018. If a member had a break in service and rejoined after the opt-in window, then they will have the option to opt-in the first 30 days. These members that opt-in to BRS will be considered BRS Opt-In Members.`,
        links:[`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 14,
        notes: `Auto-enrolled BRS members: These members will automatically begin contributing 3 percent of their basic pay after their 60th day in the service. This contribution percentage can be changed before or after their initial deduction. Changes to the percentage can be made in MyPay.`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 15,
        notes: `If a member stops their contributions, they will be automatically re-enrolled at the 3 percent contribution of basic pay on 1 January. A member can decline the automatic re-enrollment no earlier than the 1st of December.
        <br>There is an exception to this, if a member was contributing and has met the maximum annual limit of contributions their contributions will be stopped and will begin again on 1 January.
        <br>For example, if I, SFC _____ contributed the maximum amount of $19,500 to my TSP account in October, my contributions will stop and restart on 1 January unless I make changes prior to that date.`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 16,
        notes: `There are two different agency contributions that a member under BRS can receive, 1% and up to 4%.
        <br>The first is the agency automatic 1 percent contribution. An auto-enrolled BRS member will receive this after their 60th day of service. A member will receive the automatic 1 percent whether they are contributing or not. In order for the member to keep the automatic 1 percent contributions, they must complete 24 full months of service. If they get out of the service before the first day of the 25th month, all of the contributions from the agency automatic 1 percent will be forfeited.
        <br>The member can also receive the agency matching contributions up to 4 percent. For an auto-enrolled BRS member, these contributions can start after they complete 24 months of service.
        <br>The agency automatic and matching contributions can continue until the member reaches 26 years of service.`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 17,
        notes: `For members who opt-in to the Blended Retirement System, the agency automatic and matching contributions will begin immediately and will continue until the member reaches 26 years of service.
        <br>For members that began service before 1 January 2018 and did not opt-in to BRS, they will stay under the legacy retirement system and will not be eligible for the automatic or matching contributions.`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 18,
        notes: `This is a guide on BRS contributions. The far left column shows an example of how much a member contributes from his or her basic pay. The two middle columns shows the agency automatic and matching contributions. The agency automatic 1% will start after 60 days of a member being in the service. The matching contribution column shows up to 4% which starts after 2 years of a member being in the service. Opt-in members will see the automatic and matching contributions immediately. The far right column shows the combined total contributions.
        <br>
        Let’s look at the first example, if a member contributes 0%, they will still receive the automatic 1% of their basic pay to their account. If a member contributes 5%, they will receive the automatic 1% contribution, and the 4% matching contributions for a total of 10%.`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 19,
        notes: `<strong>Continuation Pay
        <br>Members covered by BRS are eligible to elect continuation pay which is a one-time, midcareer bonus payment. This bonus will be paid to the member between 8 and 12 years of service. For a member in the active component, they can receive continuation pay of 2.5 to 13 times their basic pay.
        <br>For members in the reserve or national guard, they can receive continuation pay of 0.5 to 6 times their basic pay. The branch of service will determine when a bonus will be paid.
        <br>Pay rates. Pay-rate multipliers may be based on service-specific retention needs, specialty skills and hard-to-fill positions, similar to career field incentives and re- enlistment bonuses. Each service determines and publishes its own guidance on continuation pay.
        <br><strong>LumpSum Cashout
        <br>A member may elect to receive a lump sum amount of 25% or 50% of their monthly retired pay in exchange for a reduced monthly retired pay. Once a member reaches age 67, the monthly retired pay will return to the full amount.`,
        links: [`link3.com`, `link4.com`]
    },
    {
        lessonid: 11,
        slide: 20,
        notes: `This slide shows an example for Active Duty/Regular Army retirement.
        <br>If a member joined the military before 1 January 2018 and did not opt-in to BRS, they will be a part of the legacy retirement system also known as High 3.
        <br>For retirement, a member must serve 20 years of active service. They will receive the average of the highest 36 months of basic pay, retirement multiplier of 2.5% for legacy and 2% for BRS.
        <br>The chart on the slide shows the comparison between Legacy and BRS. In this example, a member retires at 20 years of service. To find the monthly lifetime annuity, we will multiply the years of service, high 3, and retirement multiplier for Legacy or BRS.
        <br>In this example, if this member retires with the Legacy system, their monthly annuity is $3250; if this member retires with the BRS system, their monthly annuity is $2600.`,
        links: [`link3.com`, `link4.com`]
    },

{
    lessonid: 11,
    slide: 21,
    notes: `This slide shows an example for Reserves and National Guard retirement.
    <br>A member must serve 20 years of qualifying service and must have 50 retirement points per year. A member in the reserves would receive retirement points by completing duty, such as, inactive duty training (IDT), also known as a battle assembly or a drill weekend. Each day a member is on orders, they will receive 1 point towards retirement.
    <br>Retirement pay generally begins at age 60 and is based off the number of retirement points they have accumulated.
    <br>The chart on the slide shows the comparison between Legacy and BRS, similar to active component. The only difference is the retirement points must be calculated to get the equivalent years of service. The retirement points must be divided by 360 to get the equivalent years of service. In this example, 4,860 retirement points divided by 360 is 13.5 equivalent years of service.
    <br>If this member retires with the Legacy system, their monthly annuity is $2193.75; if this member retires with the BRS system, their monthly annuity is $1755.`,
    links: [`link3.com`, `link4.com`]
},
{
    lessonid: 11,
    slide: 22,
    notes: `Here is a comparison between the time frames for legacy retirement system and the blended retirement system. Take a moment to view the differences between the two.`,
    links: [`link3.com`, `link4.com`]
},
{
    lessonid: 11,
    slide: 23,
    notes: `Here are some useful links that will be helpful to guide HR professionals on military savings programs or retirement systems.`,
    links: [`link3.com`, `link4.com`]
},
{
    lessonid: 11,
    slide: 23,
    notes: `Engage the class by asking these three questions and provide the answer.`,
    links: [`link3.com`, `link4.com`]
},
{
    lessonid: 11,
    slide: 24,
    notes: `Military Savings Programs were established to provide members of the uniformed services the opportunity to build financial savings. It is important to understand Savings Deposit Program (SDP), Thrift Savings Plan (TSP), and Blended Retirement System (BRS) to inform members on the available government retirement savings, investment plans, and provide resources.`,
    links: [`link3.com`, 'link4.com']
}


]
}
