# Supply-Chain-MLOps: Beyond the Technical Pipeline.

Reflections on the human and technical lessons learned through the Supply-Chain-MLOps project. The first two articles are preserved below; the third is stored in [semantic-clustering-four-pillars.md](semantic-clustering-four-pillars.md).

## Contents

1. [Trustpilot: Without Trust, Skills Are Not Enough](#1-trustpilot-without-trust-skills-are-not-enough)
2. [AI Coding Assistants: Finding the Right Balance](#2-ai-coding-assistants-finding-the-right-balance)

---

# 1. Trustpilot: Without Trust, Skills Are Not Enough

**What happens when a team has the technical skills to complete a project, but struggles to build the trust needed to work effectively together?**

A few months ago, I completed six months of intensive training in MLOps with the presentation of a collaborative project designed to put our newly acquired skills into practice.

Working as a team of three, we developed a machine learning solution to automatically categorize customer reviews collected from the Trustpilot platform.

You can explore the project on GitHub:

[**Supply-Chain-MLOps — GitHub Repository**](https://github.com/Robin-Mom/Supply-Chain-MLOps)

The technical challenge was substantial. But looking back, I realize that the most valuable lessons I learned had less to do with machine learning or software engineering than with human relationships and team dynamics.

Our project was ambitious, and completing it required a careful distribution of responsibilities among the three of us.

To coordinate our work, we relied on Git, GitHub, and DagsHub to version our code, track changes in our data, and manage the different stages of development.

By the end of the project, we had accumulated **212 commits across 21 branches**.

A considerable amount of work.

And yet, despite everyone's technical skills and efforts, some parts of the project were not as functional or reliable as we had initially hoped.

So what went wrong?

Interestingly, I think the answer lies in the very concept at the heart of the platform from which we collected our data: **trust**.

Trustpilot's mission revolves around building trust between consumers and businesses. To support this mission, the platform has established five guiding principles: *Neutral, Open, Fair, Transparent, and Relevant*.

I find it rather ironic that these same principles provide such an interesting framework for reflecting on the difficulties we encountered.

What happens if we apply them to collaborative teamwork?

- **Neutral:** We naturally become attached to our own ideas, interpretations, and expectations. Maintaining neutrality means being willing to question our assumptions and evaluate proposals on their merits rather than defending them simply because they are ours.

- **Open:** Effective collaboration requires being receptive to different perspectives, constructive criticism, and alternative solutions. Everyone should feel able to express concerns and challenge decisions without turning disagreements into personal conflicts.

- **Fair:** The rules and commitments agreed upon by the team should apply consistently to everyone. Trust becomes difficult to maintain when expectations or responsibilities are perceived as unequal.

- **Transparent:** Clear and honest communication is essential to preventing misunderstandings. Sharing progress, difficulties, and changes in direction allows everyone to understand where the project stands and make informed decisions.

- **Relevant:** Individual initiative is valuable, but it needs to remain aligned with collectively agreed objectives. Finding the right balance between personal autonomy and shared priorities is essential to keeping the project moving forward.

Of course, these are my own interpretations of Trustpilot's principles, adapted to the context of teamwork.

But they raise some very practical questions.

**What happens when commitments are not respected? When someone continues pursuing a particular direction despite the team's disagreement? How can misunderstandings be resolved without spending an excessive amount of time in meetings?**

Looking back, two lessons stand out to me.

The first is the importance of **clear leadership and decision-making responsibilities**.

In our case, there was no hierarchical relationship between the three team members. While this encouraged autonomy, it also made certain disagreements difficult to resolve.

I have come to believe that effective collaboration does not necessarily require a rigid hierarchy, but it does require a clearly defined way of making decisions when consensus cannot be reached.

Someone must be able to make the final call, within a framework accepted by the team.

The second lesson is that **trust should be supported by reliable working practices, not simply assumed to exist**.

Misunderstandings, mistakes, and unexpected difficulties are inevitable in any collaborative project.

The objective should not be to eliminate every possible dysfunction, but to establish processes that prevent these difficulties from compromising the entire project.

In our case, version control was a particularly valuable safeguard.

GitHub and DagsHub allowed us to preserve previous work, track modifications, and recover from situations that could otherwise have seriously compromised the final outcome.

In many ways, these tools saved us when things became difficult.

But they also taught me something important: technical tools can preserve the integrity of a project, yet they cannot, by themselves, establish trust between the people working on it.

And this brings me to the most uncomfortable part of this reflection.

I could have spent additional time rebuilding the entire GitHub repository, polishing the implementation, and presenting the project as if everything had worked perfectly.

But that would not have been an accurate reflection of our experience.

More importantly, it would have avoided the question that matters most to me.

**How do we create the trust that every successful collaborative project depends on?**

Technical skills are essential, of course. But their value in a collective project depends on our ability to combine them effectively.

And that requires much more than a shared repository, a well-defined architecture, or a collection of sophisticated tools.

It requires communication, accountability, fairness, and a willingness to recognize that our own perspective may not always be the right one.

Perhaps the most important lesson I took away from these six months is that **trust is not merely a desirable quality in teamwork. It is part of the infrastructure that makes collaboration possible.**

Without it, even the strongest technical skills may never reach their full potential.

---

# 2. AI Coding Assistants: Finding the Right Balance

**When AI can write code faster than we can understand it, how much responsibility should we delegate?**

A few months ago, during my Machine Learning Engineering training, I participated in a group project aimed at implementing a complete MLOps pipeline.

Working in a team of three, we developed a machine learning application to automatically categorize customer reviews collected from Trustpilot.

As I explained in a previous article, one of our greatest challenges was finding an effective balance in the distribution of responsibilities and the coordination of our work.

Although we managed to complete the project, I wasn't entirely satisfied with the final implementation.

So I decided to rebuild it from scratch.

[**Supply-Chain-MLOps — GitHub Repository**](https://github.com/Robin-Mom/Supply-Chain-MLOps)

This gave me the opportunity to revisit the entire MLOps workflow, from data exploration and model development to application deployment and the monitoring of model and system performance in a production-like environment.

However, I didn't want to spend an excessive amount of time on this implementation.

And that made it the perfect opportunity to continue experimenting with the increasingly powerful AI coding assistants available today.

Looking back on this experience, I find myself facing several interesting questions.

First, I have to acknowledge just how effective these tools have become. Their ability to generate code, navigate complex projects, identify bugs, and suggest implementations is genuinely impressive.

At this point, completely ignoring their potential would seem like a missed opportunity.

But while working with them, two particular challenges caught my attention.

## 1. When Code Generation Outpaces Understanding

One of the first things I noticed was how quickly AI coding assistants can generate substantial amounts of code.

And before you know it, the complexity of your own project can begin to outpace your understanding of its implementation.

For example, when I migrated MLflow tracking from a local SQLite-backed setup to a remote DagsHub server, Codex introduced an additional script to manage tracking configuration alongside the existing training script.

Similarly, when implementing DVC pipelines, several functions distributed across different scripts were introduced to manage parameters defined in `params.yaml`.

Now, I'm not saying these solutions were necessarily wrong.

They may even provide useful abstractions in certain circumstances.

But sometimes, a much simpler implementation might have been sufficient.

And this is where the dilemma emerges.

**Should I spend the time required to understand every piece of generated code, or should I delegate certain implementation details and focus on supervising the overall architecture and objectives?**

The answer is not as obvious as it might seem.

On one hand, understanding the implementation is essential for maintaining control over the project, identifying unnecessary complexity, and ensuring that the system remains maintainable.

On the other hand, insisting on reviewing every single line in depth could eliminate much of the productivity gain that makes these tools so valuable.

Perhaps the real challenge is learning to distinguish between what requires a deep understanding and what can be safely delegated.

But that raises another question: **how do we evaluate the quality of code that we have not entirely written or understood ourselves?**

A functional implementation is not necessarily a good implementation. Code quality also involves clarity, simplicity, testability, maintainability, and the ability to evolve without introducing unexpected failures.

And these qualities are not always immediately visible when the application appears to be working correctly.

## 2. When Assistance Becomes Passivity

The second challenge is perhaps more personal.

**How do we prevent ourselves from becoming passive developers when AI makes coding so easy?**

I have noticed how tempting it can be to let an assistant handle an entire implementation, particularly when it produces convincing results within seconds.

At first, this feels like a remarkable improvement in productivity.

But there is a subtle risk.

The less I engage with the actual implementation, the fewer opportunities I have to practice problem-solving, explore alternative approaches, and develop the technical intuition that comes from working through difficulties myself.

And this raises a fundamental question about learning.

If I consistently delegate the most demanding parts of a task, am I really becoming a better engineer, or simply becoming more proficient at supervising an AI system?

Of course, these two possibilities are not mutually exclusive.

Knowing how to formulate a problem, design an architecture, review an implementation, and evaluate results are valuable engineering skills in their own right.

But I also believe that maintaining a certain level of hands-on practice remains essential.

Not necessarily because every line of code must be written manually, but because **critical thinking is difficult to maintain without regularly confronting the problems it is supposed to solve**.

In other words, the challenge is not simply to use AI effectively.

It is to ensure that using AI continues to strengthen our abilities rather than gradually replacing the effort through which those abilities develop.

## Finding a Dynamic Balance

I don't have definitive answers to these questions.

And perhaps there is no single answer.

The appropriate balance between delegation and direct involvement will probably continue to evolve with the capabilities of AI tools, my own technical expertise, and the nature of the projects I undertake.

Some tasks may benefit from extensive automation. Others may require a much closer involvement, whether because of their complexity, their importance, or simply because I want to understand the underlying mechanisms.

What matters to me is maintaining the ability to make that distinction consciously.

I want to benefit from the extraordinary possibilities offered by AI without becoming dependent on its ability to solve problems on my behalf.

**What I am looking for is interconnection rather than interdependence: a relationship in which AI extends my capabilities without gradually undermining my autonomy.**

Perhaps the right balance is not a fixed position we can reach once and for all.

It is something we have to continuously adjust.

And in that sense, learning to work with AI feels a little like walking a tightrope.

Leaning too far toward manual implementation may mean missing out on the remarkable efficiency these tools offer.

Leaning too far toward automation may mean losing the technical understanding and independence needed to guide them effectively.

So, like a tightrope walker, I keep moving forward, constantly adjusting my balance.

**One step at a time.**
