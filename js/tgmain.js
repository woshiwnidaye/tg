var num=0;
function getLoad()
{
	num++;
	if(num==1)
	{
		var url="https://www.lqbzda.com";
		$("a.todowns").attr("href",url);
	}
}