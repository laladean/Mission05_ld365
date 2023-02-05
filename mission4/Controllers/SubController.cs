using Microsoft.AspNetCore.Mvc;
using mission4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mission4.Controllers
{
    public class SubController : Controller
    {
        //returns the index.cshtml page
        public IActionResult Index()
        {
            return View();
        }

        //sends a get request to the gradecalc view
        [HttpGet]
        public IActionResult GradeCalc()
        {
            return View();
        }

       //sends a post request to the gradecalc view
        [HttpPost]
        public IActionResult GradeCalc(GradeCalcModel model)
        {
            return View();
        }
    }
}
