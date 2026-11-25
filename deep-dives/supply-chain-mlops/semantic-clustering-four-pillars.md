# Semantic Clustering of Customer Reviews: The Four Pillars of Evaluation

**How do we know whether a clustering model is actually producing meaningful results?**

I recently completed a project focused on the semantic clustering of customer reviews collected from Trustpilot.

The initial question was relatively straightforward: *How can we automatically categorize customer reviews to make the user interface more intuitive and easier to navigate?*

To explore this question, I developed and evaluated several semantic clustering approaches as part of an end-to-end MLOps project.

[**Supply-Chain-MLOps — GitHub Repository**](https://github.com/Robin-Mom/Supply-Chain-MLOps)

But while experimenting with different algorithms and representations, I found myself facing a more fundamental question.

**How should we evaluate the quality of the clusters we generate?**

After exploring different strategies, I came to see clustering evaluation as a problem built around four complementary pillars.

## 1. Geometric Evaluation: Are the Clusters Well Separated?

The first approach focuses on the geometric properties of the data.

Once customer reviews have been transformed into numerical representations, such as sentence embeddings, we can use distance-based metrics to evaluate how the resulting clusters are organized within the embedding space.

One commonly used metric is the *silhouette score*.

For each data point, this metric compares its average distance to other points within the same cluster with its average distance to points in the nearest neighboring cluster.

In other words, it provides an indication of how compact and well separated the clusters are.

Other metrics, such as the Davies–Bouldin index, can provide complementary information about their geometric structure.

But there is an important limitation.

**Geometric separation does not necessarily imply semantic coherence.**

Two groups of reviews may be clearly separated in the embedding space without corresponding to categories that a human user would find meaningful.

Conversely, semantically relevant categories may overlap geometrically because they share vocabulary, context, or underlying concepts.

Geometric metrics are therefore useful for an initial comparison of clustering strategies, but they cannot, on their own, establish whether the resulting groups make sense.

## 2. Statistical and Algorithmic Stability: Can We Trust the Results?

The second pillar addresses a complementary question.

**Would we obtain similar clusters if we repeated the experiment under slightly different conditions?**

Clustering results can depend on several factors, including the training dataset, the initialization of the algorithm, and the distribution of the observations.

For example, K-means may converge toward different solutions depending on the initial positioning of its centroids.

Similarly, changing the sampling of customer reviews may affect the resulting cluster structure.

This raises an important concern for deployment.

If a model produces significantly different categories whenever it is retrained, how can we ensure that the application remains predictable and reliable?

To investigate this issue, we can evaluate clustering stability across repeated experiments, different random initializations, or alternative data samples.

Metrics such as the Adjusted Rand Index (ARI) can help quantify the agreement between different cluster assignments when the same observations are being compared.

The objective is not necessarily to obtain identical results under every condition, but to identify methods whose outputs remain sufficiently consistent despite reasonable sources of variability.

**A clustering strategy should not only produce convincing results once. It should demonstrate that those results are reasonably reproducible.**

This becomes particularly important when moving from experimentation toward production, where the model may encounter new reviews and evolving data distributions.

## 3. Semantic Coherence: Do the Clusters Actually Mean Something?

This is perhaps the most challenging pillar.

After all, our objective is not simply to group nearby vectors in a high-dimensional space.

We want to identify categories that make sense to human users.

But how can we evaluate something as complex as semantic meaning?

The first challenge lies in representation.

**How can we summarize the semantic content of an entire cluster using only a limited amount of information?**

One possibility is to extract its most representative terms using techniques such as class-based TF-IDF (c-TF-IDF).

Another approach is to select representative customer reviews, for example, those located near the cluster centroid or medoid.

We might also inspect observations located farther from the cluster center to better understand its semantic boundaries and internal diversity.

These techniques can help us characterize a cluster.

But they also introduce a sampling problem: how do we ensure that the selected keywords or reviews adequately represent the diversity of the entire group?

And even once we have obtained a suitable representation, another question remains.

**Who, or what, should evaluate its semantic coherence?**

We could ask several independent human experts to assess whether the reviews within each cluster express a consistent underlying theme.

Alternatively, we could use one or several large language models to evaluate their semantic consistency.

Both approaches have advantages and limitations.

Human evaluation can incorporate contextual understanding and domain expertise, but it is time-consuming and may introduce subjective disagreements.

LLM-based evaluation offers greater scalability, but its conclusions can depend on the model, the evaluation instructions, and the criteria used to define semantic coherence.

Perhaps the most promising approach is to combine these methods, using clearly defined evaluation criteria and human judgments to assess the reliability of automated evaluations.

Ultimately, **semantic coherence cannot be reduced to a single geometric property. It requires us to define what meaningful categories actually are.**

And that definition inevitably brings us back to the purpose of the application.

## 4. Business Requirements: Does the Model Solve the Original Problem?

The fourth pillar brings the entire evaluation process back to its starting point.

**We should never lose sight of the question the application was designed to answer.**

Imagine that we use HDBSCAN to cluster customer reviews.

We might obtain well-separated clusters, excellent semantic coherence, and highly stable results.

From a purely technical perspective, the clustering could appear remarkably successful.

But what if the algorithm produces forty different clusters?

In our project, one of the main business constraints was to limit the number of categories to approximately ten.

The objective was to simplify the navigation of customer reviews, not to overwhelm users with an excessive number of categories.

A model producing forty clusters could therefore perform extremely well according to several technical metrics while failing to meet the actual needs of the application.

And there is another consideration with algorithms such as HDBSCAN: some observations may remain unassigned because they are classified as noise.

Evaluating only the assigned observations might produce very convincing clustering metrics, while overlooking the proportion of reviews that the application cannot categorize.

The trade-off between cluster quality, coverage, and the number of categories must therefore be considered in light of the intended user experience.

**A technically successful model is not necessarily a useful model.**

And perhaps this is the most important lesson of the entire evaluation process.

## Connecting the Four Pillars

Looking back on this project, I believe that integrating these four dimensions is essential to evaluating the relevance of a semantic clustering application.

Geometric evaluation helps us understand the structure of the resulting clusters.

Statistical and algorithmic stability helps us assess their robustness.

Semantic evaluation tells us whether the clusters correspond to meaningful concepts.

And business requirements determine whether those concepts are useful for the people the application is meant to serve.

But this raises one final methodological challenge.

**How should these four pillars be integrated across the different stages of the machine learning lifecycle, from training and validation to final testing and production monitoring?**

Some criteria can be evaluated automatically during model development. Others require human assessment or must be monitored as the application encounters new data.

The challenge is therefore not only to select the best model, but also to design an evaluation strategy that remains relevant throughout its lifecycle.

And this brings me back to a reflection that has accompanied much of my recent work at the intersection of biology and artificial intelligence.

**Perhaps one of the most important contributions of human expertise lies in building the bridge between real-world needs and technical objectives.**

What expectations should the application fulfill?

What does a meaningful result look like from the user's perspective?

And how can those expectations be translated into measurable constraints that guide model development and evaluation?

These questions cannot be answered by optimizing an algorithm alone.

They require us to connect technical possibilities with human intentions.

Ultimately, the value of a machine learning application does not lie solely in the sophistication of its algorithms or the quality of its metrics.

**It lies in how effectively those algorithms serve the purpose for which the application was built.**
