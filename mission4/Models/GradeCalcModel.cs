using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace mission4.Models
{
    //data validation --> each entry must be between 0 and 100, the field can't be empty, and the entry must be a valid integer
    public class GradeCalcModel
    {
        [Required(ErrorMessage = "Field cannot be empty")]
        [Range(0,100, ErrorMessage = "The grade must be between 0 and 100")]
        public int assignments { get; set; }

        [Required(ErrorMessage = "Field cannot be empty")]
        [Range(0, 100, ErrorMessage = "The grade must be between 0 and 100")]
        public int projects { get; set; }

        [Required(ErrorMessage = "Field cannot be empty")]
        [Range(0, 100, ErrorMessage = "The grade must be between 0 and 100")]
        public int quizzes { get; set; }

        [Required(ErrorMessage = "Field cannot be empty")]
        [Range(0, 100, ErrorMessage = "The grade must be between 0 and 100")]
        public int midterm { get; set; }

        [Required(ErrorMessage = "Field cannot be empty")]
        [Range(0, 100, ErrorMessage = "The grade must be between 0 and 100")]
        public int final { get; set; }

        [Required(ErrorMessage = "Field cannot be empty")]
        [Range(0, 100, ErrorMessage = "The grade must be between 0 and 100")]
        public int intex { get; set; }

    }
}


