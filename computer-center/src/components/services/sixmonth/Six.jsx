import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CourseCard } from '../CourseCard.jsx';
import img from '../../../assets/Images/books.jpg';

// Course data
const courseData = [
    {
        title: "DIPLOMA IN COMPUTER APPLICATION",
        semester: "Semester 1",
        description: "Computer Fundamentals windows 7,Ms office 2010 Internet",
        image: img
    },
    {
        title: "DIPLOMA IN FINANCIAL ACCOUNTING",
        semester: "Semester 1",
        description: "Computer Fundamentals windows 7,Accounting Concept,Tally,Internet.",
        image: img
    },
    
    {
        title: "DIPLOMA IN DESK TOP PUBLISHING",
        semester: "Semester 1",
        description: "Computer Fundamentals windows7,PageMaker, Coral Draw,Photoshop,Regional Typinginternet",
        image: img
    },
    
    {
        title: "DIPLOMA IN HARDWARE MAINTENANCE",
        semester: "Semester 1",
        description: "Computer Fundamentals windows 7,Construction & functioning of different PC parts, Monitor, Mother Board, Hard Disk, VD-ROM etc.Software installation, Troubleshooting etc.",
        image: img
    },
    
    {
        title: "DIPLOMA IN INTERNET APPLICATION",
        semester: "Semester 1",
        description: "Computer Fundamentals windows 7,Internet.",
        image: img
    },
    
    {
        title: "DIPLOMA IN WEB TECHNOLOGY",
        semester: "Semester 1",
        description: "Computer Fundamentals windows 7,Internet,HTML including Javascript",
        image: img
    },
    
    {
        title: "DIPLOMA IN COMPUTER PROGRAMMING",
        semester: "Semester 1",
        description: "Computer Fundamentals windows 7,C,C ++,Internet",
        image: img
    },
    
    {
        title: "DIPLOMA IN PROFESSIONAL PROGRAMMING",
        semester: "Semester 1",
        description: "Computer Fundamentals Basic Concept of programming Languages:Language C,Language C++,HTML with CSS,Core PHP project Work",
        image: img
    },
    
    {
        title: "DIPLOMA IN COMPUTER APPLICATION & ACCOUNTING",
        semester: "Semester 1",
        description: "Computer Fundamentals MS Office Internet,Accounting Concept Tally",
        image: img
    },
    
    {
        title: "DIPLOMA IN NETWORKING",
        semester: "Semester 1",
        description: "Computer Fundamentals Networking",
        image: img
    },
    
    {
        title: "DIPLOMA IN BASIC MULTIMEDIA",
        semester: "Semester 1",
        description: "Computer Fundamentals windows 7,Photoshop,Corel Draw,Flash, Premiere Pro,After Effects",
        image: img
    },
    
    {
        title: "CERTIFICATE IN AUTO CAD AND STAAD PRO",
        semester: "Semester 1",
        description: "Computer Fundamentals Auto CAD,STAAD pro",
        image: img
    },
    
    {
        title: "DIPLOMA IN DOTNET PROGRAMMING",
        semester: "Semester 1",
        description: "Computer Fundamentals C++,C# .NET,VB.NET,ASP.NET,SQL SERVER 2008,JAVA,ADV JAVA,MYSQL,INTERNSHIP",
        image: img
    },
    
    {
        title: "CERTIFICATE IN GRAPHIC DESIGNING",
        semester: "Semester 1",
        description: "Computer Concepts & Fundamentals of computer,Operating system (Dos, Windows XP/7),MS-Office XP/ 2007 ( Ms Word, Ms excel, Ms Power Point ,Access),Introduction to Internet & E-mail,Html,css,java Script,AS/PHP,",
        image: img
    },
    
    {
        title: "CERTIFICATE IN COMPUTER BASIC AND TALLY",
        semester: "Semester 1",
        description: "Computer Fundamentals Ms office 2010 Word Excel Power Point Tally ERP",
        image: img
    },
    
    {
        title: "CERTIFICATE IN COMPUTER APPLICATION",
        semester: "Semester 1",
        description: "Computer Fundamentals Ms Office 2010 Word Excel Power Point Access Internet",
        image: img
    },
    
    {
        title: "CERTIFICATE IN ENGLISH AND HINDI TYPING",
        semester: "Semester 1",
        description: "Computer Fundamentals English typing (41wpm) Hindi Typing using Hindi Font (34wpm)",
        image: img
    },
    
    {
        title: "DIPLOMA IN DATA ENTRY OPERATOR",
        semester: "Semester 1",
        description: "Computer Fundamentals Ms Office 2010 Word, Excel, Power Point English Typing, Hindi typing Internet.",
        image: img
    },
    
    {
        title: "Certificate in Digital Marketing",
        semester: "Semester 1",
        description: "Introduction to Digital Marketing Search Engine Optimisation (SEO)Search Engine Marketing (SEM)Social Media Marketing Content Strategy Web AnalyticsEmail MarketingE-Commerce",
        image: img
    },
    
    {
        title: "CERTIFICATE IN JAVA",
        semester: "Semester 1",
        description: "Java",
        image: img
    },
    
    {
        title: "DIPLOMA IN MOBILE MAINTENANCE",
        semester: "Semester 1",
        description: "Basic Mobile Phone,Various Mobile Circuit,Mobile Software,Mobile Phone Faults,Mobile Phone Repairing,Downloading Techniques.",
        image: img
    },
    
    {
        title: "DIPLOMA IN SOFT TOYS MAKING",
        semester: "Semester 1",
        description: "Soft Toys Making",
        image: img
    },
    
    {
        title: "DIPLOMA IN HAIR & SKIN CARE DIPLOMA IN TAILORING READY",
        semester: "Semester 1",
        description: "HAIR & SKIN CARE DIPLOMA IN TAILORING READY",
        image: img
    },
    
    {
        title: "DIPLOMA IN CUTTING & TAILORING",
        semester: "Semester 1",
        description: "Cutting & Tailoring",
        image: img
    },
    
    {
        title: "DIPLOMA IN BEAUTICIAN",
        semester: "Semester 1",
        description: "Grooming, Hygiene & Safety Basic HaircutsHair Spa & Hair Treatments Treatments for Hair Fall and Dandruff Massage Manipulation PermHair Spa/ Hair Oil Massage Keratin Understanding Skin Type & AnalysisGrey Coverage and Root Touchups",
        image: img
    },
    
    {
        title: "TO WEAR WITH ANGELA WOLF",
        semester: "Semester 1",
        description: "Hair & Skin Care",
        image: img
    },
    
    {
        title: "DIPLOMA IN HAIR CUTTING & DESIGNING",
        semester: "Semester 1",
        description: "Hair Cutting & Designing",
        image: img
    },
    
    {
        title: "DIPLOMA IN DIGITAL PHOTOGRAPHY",
        semester: "Semester 1",
        description: "Photography",
        image: img
    },
    
    {
        title: "DIPLOMA IN FASHION DESIGNING",
        semester: "Semester 1",
        description: "Fashion Designing",
        image: img
    },
    
    {
        title: "DIPLOMA IN INTERIOR DESIGNING",
        semester: "Semester 1",
        description: "Interior Designing",
        image: img
    },
    
    {
        title: "DIPLOMA IN COMMERCIAL PHOTOGRAPHY",
        semester: "Semester 1",
        description: "Photography",
        image: img
    },
    
    {
        title: "DIPLOMA IN SKIN & BEAUTY THERAPY",
        semester: "Semester 1",
        description: "DIPLOMA IN SKIN & BEAUTY THERAPY",
        image: img
    },
    
    {
        title: "DIPLOMA IN AUTOMOBILE",
        semester: "Semester 1",
        description: "Automobile.",
        image: img
    },
    
    {
        title: "RADIO-TAPE-T.V REPAIRING",
        semester: "Semester 1",
        description: "T.V Repairing",
        image: img
    },
    {
        title: "DIPLOMA IN RETAIL MANAGEMENT",
        semester: "Semester 1",
        description: "Retail Management.",
        image: img
    },
    
    {
        title: "DIPLOMA IN SILK-SCREEN PRINTING",
        semester: "Semester 1",
        description: "Silk-Screen Printing",
        image: img
    },
    
    {
        title: "DIPLOMA IN REFRIGERATION & AC REPAIRING",
        semester: "Semester 1",
        description: "Refrigeration & AC Repairing",
        image: img
    },
    
    {
        title: "DIPLOMA IN COLOUR T.V REPAIRING",
        semester: "Semester 1",
        description: "Colour T.V Repairing.",
        image: img
    },
    
    {
        title: "DIPLOMA IN RETAIL SALES",
        semester: "Semester 1",
        description: "Retail Sales Associates",
        image: img
    },
    
    {
        title: "DIPLOMA IN TELEPHONE REPAIRING & SERVICING",
        semester: "Semester 1",
        description: "Telephone Repairing & Servicing",
        image: img
    },
    
    {
        title: "DIPLOMA IN COMPUTER APPLICATION",
        semester: "Semester 1",
        description: "Computer Fundamentals windows 7,Ms office 2010 Internet",
        image: img
    },
    
    {
        title: "DIPLOMA IN MOBILE REPAIRING & SOFTWARE INSTALLATION",
        semester: "Semester 1",
        description: "Mobile Repairing & Software Installation",
        image: img
    },
    
    {
        title: "DIPLOMA IN VIDEOGRAPHY ASSOCIATES",
        semester: "Semester 1",
        description: "Videography",
        image: img
    },
    
    {
        title: "DIPLOMA IN BASIC WOOD WORK",
        semester: "Semester 1",
        description: "Wood Work",
        image: img
    },
    
    {
        title: "DIPLOMA IN WOOD PAINTING",
        semester: "Semester 1",
        description: "Wood Painting",
        image: img
    },
    
    {
        title: "DIPLOMA IN SPRAY PAINTING",
        semester: "Semester 1",
        description: "Spray Painting",
        image: img
    },
    
    {
        title: "DIPLOMA IN PAINTER ASSISTANT",
        semester: "Semester 1",
        description: "Painter Assistant",
        image: img
    },
    
    {
        title: "DIPLOMA IN WALL PAINTING",
        semester: "Semester 1",
        description: "Wall Painting.",
        image: img
    },
    
    {
        title: "DIPLOMA IN WOODEN FURNITURE MAKING",
        semester: "Semester 1",
        description: "Wooden Furniture Making",
        image: img
    },
    
    {
        title: "DIPLOMA IN METAL SURFACE PAINTING",
        semester: "Semester 1",
        description: "Metal Surface Painting",
        image: img
    },
    {
        title: "DIPLOMA IN BOOK BINDING",
        semester: "Semester 1",
        description: "Book Binding",
        image: img
    },
    {
        title: "DIPLOMA IN BUILDING AND CONSTRUCTION",
        semester: "Semester 1",
        description: "Building and Construction",
        image: img
    },
    {
        title: "DIPLOMA IN WELDING TECHNICIAN",
        semester: "Semester 1",
        description: "Welding Technician",
        image: img
    },
    {
        title: "DIPLOMA IN PLUMBING & PIPEFITTING",
        semester: "Semester 1",
        description: "Plumbing & Pipefitting",
        image: img
    },
    {
        title: "DIPLOMA IN SECURITY & SAFETY MANAGEMENT",
        semester: "Semester 1",
        description: "Security & Safety Management",
        image: img
    },
    {
        title: "DIPLOMA IN COMPACT TRAVEL & TOURISM",
        semester: "Semester 1",
        description: "Compact Travel & Tourism",
        image: img
    },
    {
        title: "DIPLOMA IN TRAVEL BUSINESS ADMINISTRATION",
        semester: "Semester 1",
        description: "Travel Business Administration",
        image: img
    },
    {
        title: "DIPLOMA IN BASIC SECURITY GUARD TRAINING",
        semester: "Semester 1",
        description: "Security Guard Training",
        image: img
    },
    {
        title: "DIPLOMA IN HOUSE KEEPING",
        semester: "Semester 1",
        description: "House Keeping",
        image: img
    },
    {
        title: "DIPLOMA IN STORE KEEPING",
        semester: "Semester 1",
        description: "Store Keeping",
        image: img
    },
    {
        title: "DIPLOMA IN BUILDING AND CONSTRUCTION SUPERVISOR",
        semester: "Semester 1",
        description: "Building and Construction Supervisor",
        image: img
    },
    {
        title: "DIPLOMA IN FLOOR MAKING & TILES SETTING",
        semester: "Semester 1",
        description: "Floor Making & Tiles Setting",
        image: img
    },
    {
        title: "DIPLOMA IN LEVELING & SETTING OUT",
        semester: "Semester 1",
        description: "Leveling & Setting Out",
        image: img
    },
    {
        title: "DIPLOMA IN MAKEUP ARTIST",
        semester: "Semester 1",
        description: "Prepare and Maintain work area, Professional Makeup,International Product Knowledge,Hair Style Detailing",
        image: img
    },
    {
        title: "DIPLOMA IN ARTS & CRAFT",
        semester: "Semester 1",
        description: "Drawing,Febric painting,Aari Work,Glass Painting,Handmade Jewelry Making,Pot Painting,Quilling Craft,Recycled Craft,Soft Toys,Engraving Work,Online Business Training",
        image: img
    },
    {
        title: "CERTIFICATE IN DECORATIVE PAINTINGS",
        semester: "Semester 1",
        description: "Basic Concept of Painting,Glass Painting,Emboss Painting,Fabric Painting,Pot Painting,PaintingWith Bamboo,Working With Ribbon And Board Decoration.",
        image: img
    },
    {
        title: "DIPLOMA IN COMMUNICATIVE ENGLISH",
        semester: "Semester 1",
        description: "Basic & Advance Course of English Language,Phonetics,Vocabulary,Story Making,Basic Presentation,Writing,Speech,Reading skills,Conversation.",
        image: img
    },

    
];

export function Six() {
    // Styles for gallery
    const galleryStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '16px',
        padding: '16px',
       
    };

    return (
        <Box sx={{ padding: { xs: '8px', sm: '16px', md: '16px' } }}>
            <Typography variant="h1" component="h1" gutterBottom sx={{ textAlign: 'center', fontSize:'3rem' }}>
                Our Courses
            </Typography>
            <Typography variant="body1" paragraph sx={{ textAlign: 'center', marginBottom: '16px' }}>
                We have selected all the courses ideally for the student for their better improvement in technical career prospect.
            </Typography>
            
            <Box sx={galleryStyles}>
                {courseData.map((course, index) => (
                    <CourseCard
                        key={index}
                        title={course.title}
                        semester={course.semester}
                        description={course.description}
                        image={course.image}
                        sx={{ 
                            width: { xs: '100%', sm: '45%', md: '30%' },
                             maxWidth: '300px' 
                             }}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default Six;
