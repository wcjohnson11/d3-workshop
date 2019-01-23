# D3 World Happiness Exploration

This repo will serve as a ground for exploring the [Global Happiness Dataset](https://docs.google.com/spreadsheets/d/1QrHe795dFCska9LycSNDRg1j1P8ktF6W4tqvFEgaNqI/edit#gid=0) for the [World Data Visualization Prize](https://informationisbeautiful.net/2018/announcing-the-world-data-visualization-prize-a-40k-dataviz-challenge/)

## Data & Datatypes

The values in this dataset are coming from many different organizations and metrics will be informed by their philosophies on what it means to be happy. This might be an interesting avenue to explore.


### Demographic information

1. Population
1. Surface area Km^2

### Calculated Metrics

Metrics informed by various organizations' theories on how to calculate national happiness

1. GINI index
    * Inequality in distribution of family income, (lower is better)
1. Happy Planet Index
    * Well Being + Life Expectancy + inequalities + ecological footprint (higher is better)
1. Human Development Index
    * Healthy Life + Knowledge + Standard of Living (higher is better)
1. World Happiness Report Score
    * Polled inhabitants, rating quality of life from 1-10 (higher is better)
1. Sustainable Economic Development Assessment (SEDA)
    * An assessment based on 40 indicators across sustainability, economics & investments (higher is better)

#### Heritage Foundation

Thinktank that theorizes that economic freedom leads to prosperity which leads to positive social and economic goals, including happiness.

1. Government Spending Score
    * Burden of Gov Spending on country, lower is better
1. Judicial Effectiveness Score
    * Judicial independence & quality of judicial process, fairness
1. Government Integrity Score
    * Public trust + transparency + corruption
1. Property Rights Score
    * How freely can inhabitants acquire private property
1. Tax Burden Score
    * Individual tax rate + corporate tax rate + total tax as % of GDP
1. Overall Economic Freedom Score
    * based on 12 quantitative and qualitative factors, grouped into four broad categories, or pillars, of economic freedom:
        * Rule of Law (property rights, government integrity, judicial effectiveness)
        * Government Size (government spending, tax burden, fiscal health)
        * Regulatory Efficiency (business freedom, labor freedom, monetary freedom)
        * Open Markets (trade freedom, investment freedom, financial freedom)
1. Financial Freedom Score
    * Level of gov regulation of financial services, foreign competition, credit & capital development


#### Freedom House

Thinktank formed of bipartisan groups to spread American ideals of democracy and human rights around the world. "Works to defend human rights and promote democratic change with a focus on political rights and civil liberties."

1. Political Rights Score
    * Measuring fairness of elections, equality of political parties and special interest influence. Out of 7, lower is better
1. Civil Liberties Score
    * Measuring freedom of expression, assembly, association, education and religion. Out of 7, lower is better

#### World Bank

Global partnership working to reduce poverty (reducing share of population living in extreme poverty to 3% by 2030) and build shared prosperity in developing countries (increasing income of poorest 40% of every country)

1. Political Stability & Absence of Violence
    * Likelihood of political instability, higher values correlate to better outcomes
1. Government Effectiveness
    * Quality of public services, civil service, policy formation, government commitment (-2.5 - + 2.5)
1. Regulatory Quality
    * Level of policies to support private sector
1. Rule of Law
    * Quality of rule of law ans likelihood of crime/violence
1. Control of Corruption
    * Control of corruption captures perceptions of the extent to which public power is exercised for private gain, including both petty and grand forms of corruption, as well as "capture" of the state by elites and private interests.

### Measured Metrics

Metrics that are measurable from data with less calculations.

1. GDP (billions PPP) (USD $)
    * Monetary measure of market value of all goods/services sold annually. Comonly used to determine economic performance.
1. GDP per capita (PPP) (USD $)
    * GDP divided by population and adjusted for inflation. Commonly used to measure standard of living but it is not a measure of personal income.
1. GDP growth (annual %)
    * Annual percentage growth in GDP YOY.
1. Health Expenditure as % of GDP (%)
    * How much of GDP is spent on healthcare
1. Health Expenditure per person (USD $)
    * Current USD amount of health expenditure per person
1. Education Expenditure as % of GDP (%)
    * How much of GDP is spent on education.
1. Education Expenditure per person (USD $)
    * Current USD amount of education expenditure per person.
1. School Life Expectancy (Years)
    * Average years spent in school
1. Unemployment % (%)
    * Percentage of population unemployed
1. Government Expenditure as % of GDP (%)
    * How much of GDP is government expenditure
1. Women MPs (%)
    * Percentage of women in government positions

### Data that is Missing from dataset

Some datapoints that might be helpful

1. Debt per capita (USD $)
1. Nationalized Health Care
1. Individual Tax Rate
1. Corporate tax rate
1. Poverty rates
1. Avg Income
1. Year country was founded, how long it's existed
1. Average Age in countries
1. Maternal Mortality Rate
1. Infant Mortality Rate
1. Internet Speed
1. Percentage of population on Facebook
1. Public Transportation ridership

## Questions for Analysis

1. Does education expenditure map to happiness?
1. How does unemployment correlate to happiness?
1. How does governement spending correlate to happiness?
1. How does education as % of government expenditure as % of GDP correlate to happiness?
1. The Happiness metric was introduced as an alternative to measuring countries based off GDP, how does it differ or stay the same from GDP and what does that tell us?
1. What are the similarities and differences between different organization's measurements?

## Articles on Global Happiness

[Visual Capitalist Blogpost](https://www.visualcapitalist.com/measuring-global-happiness-countries/)
[World Economic Form: Who measures world's happiest countries and how](https://www.weforum.org/agenda/2016/11/happiest-countries-measure-how/)
[Africa Check: what does UN happiness report really measure](https://africacheck.org/2018/05/07/analysis-what-does-the-un-happiness-report-really-measure/)