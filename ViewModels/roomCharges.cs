using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication3.Models;

namespace WebApplication3.ViewModels
{
    public class roomCharges
    {
        public room room { get; set; }
        public category category { get; set; }
    }
    public class room_categories
    {
        public List<room> roomData { get; set; }
        public List<category> categoryData { get; set; }
        public IQueryable<roomCharges> romChar { get; set; }

    }
}