-- which breweries make what beers
SELECT breweries."name", beer."brewery_id", beer."name"
FROM beer
INNER JOIN breweries ON beer."brewery_id" = breweries."id"

-- beers and their style
select beer."name", styles.style_name
from beer
full join styles on beer."beer_id" = styles."id"


-- breweries lat/long
select breweries.name, breweries."state", breweries.country, geocodes.latitude, geocodes.longitude
from geocodes	
inner join breweries on geocodes.id = breweries.id


