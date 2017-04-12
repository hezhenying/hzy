Vec3 = function(x,y,z)
{
    this.x=x;
    this.y=y;
    this.z=z;
}

Vec3.prototype.max = function()
{
    var max;
    if(this.x>this.y)
    {max = this.x;}
    else
    {max = this.y;}
    if(this.z>max)
    {max = this.z;}
    return max;
}
Vec3.prototype.min = function()
{
    var min;
    if(this.x<this.y)
    {min=this.x;}
    else
    {min =this.y;}
    if(this.z<min)
    {min=this.z;}
    return min;
}

Vec3.prototype.mid = function()
{
    if((this.x-this.y)*(this.x-this.z)<0)
	return this.x;
    else if((this.y-this.x)*(this.y-this.z)<0)
	return this.y;
    else return this.z;
}


