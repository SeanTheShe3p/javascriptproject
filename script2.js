//Thank you to https://webtips.dev/how-to-make-interactive-bubble-charts-in-d3-js for the incredible tutorial

const data = [{
    name: 'IRWIN Tools Magnetic Post Level (1794482),BlueHous',
    price: 5.998,
    link: 'www.amazon.com/IRWIN-Tools-Magnetic-Level-1794482/dp/B005XUHK5A/ref=sr_1_1?keywords=fence+post&qid=1683072998&sr=8-1'
  },
  {
    name: 'IRWIN Tools Magnetic Post Level (1794482),Blue',
    price: 5.998,
    link: 'www.amazon.com/IRWIN-Tools-Magnetic-Level-1794482/dp/B005XUHK5A/ref=sr_1_1?keywords=fence+post&qid=1683072998&sr=8-1'
  },
  {
    name: 'Houseables Plastic Mesh Fence, Construction Barrie',
    price: 49.8753,
    link: 'www.amazon.com/Houseables-Temporary-Fencing-Plastic-Swimming/dp/B01N4AMZ8Y/ref=sr_1_2?keywords=fence+post&qid=1683072998&sr=8-2'
  },
  {
    name: 'TIJNN Solar Deck Lights, Outdoor Lighting Backyard',
    price: 27.9848,
    link: 'www.amazon.com/Lights-Outdoor-Lighting-Backyard-Outside/dp/B07Z7YL1BW/ref=sr_1_3?keywords=fence+post&qid=1683072998&sr=8-3'
  },
  {
    name: 'AJART Hanging Plant Hanger Outdoor: 12-Inch Bird F',
    price: 19.9739,
    link: 'www.amazon.com/AJART-Hanging-Bracket-Hangers-Pieces-12/dp/B07M667SGQ/ref=sr_1_4?keywords=fence+post&qid=1683072998&sr=8-4'
  },
  {
    name: 'Self-Locking Gate Latch Heavy Duty Post Mount Auto',
    price: 19.99,
    link: 'www.amazon.com/Self-Locking-Automatic-Gravity-Fasteners-Hardware/dp/B0854B4353/ref=sr_1_5?keywords=fence+post&qid=1683072998&sr=8-5'     
  },
  {
    name: 'MAGGIFT 15 Lumen Solar Post Lights, Outdoor Post C',
    price: 44.99,
    link: 'www.amazon.com/MAGGIFT-Outdoor-Powered-Brightness-Lighting/dp/B08C2VK194/ref=sr_1_6?keywords=fence+post&qid=1683072998&sr=8-6'
  },
  {
    name: 'QIEGL Hanging Plant Bracket 6inch Metal Plant Hook',
    price: 11.99,
    link: 'www.amazon.com/QIEGL-Hanging-Shepherds-Decorative-Lanterns/dp/B08FB8Q57X/ref=sr_1_7?keywords=fence+post&qid=1683072998&sr=8-7'
  },
  {
    name: 'DenicMic Solar Deck Lights 16 Pack Fence Post Sola',
    price: 32.98,
    link: 'www.amazon.com/DenicMic-Pathway-Weatherproof-Powered-Outdoor/dp/B07VWJFLK4/ref=sr_1_8?keywords=fence+post&qid=1683072998&sr=8-8'
  },
  {
    name: 'Dynaming 6 Pack Solar Post Lights Outdoor, Solar P',
    price: 49.9959,
    link: 'www.amazon.com/Dynaming-Outdoor-Powered-Brightness-Lighting/dp/B09N6YZD33/ref=sr_1_9?keywords=fence+post&qid=1683072998&sr=8-9'
  },
  {
    name: 'Fast 2K Fence Post Mix | Expanding Foam Concrete A',
    price: 25.99,
    link: 'www.amazon.com/Alternative-Replacement-Installs-Expanding-Composite/dp/B00LAFUC34/ref=sr_1_10?keywords=fence+post&qid=1683072998&sr=8-10'
  },
  {
    name: 'ROSHWEY Solar Outdoor Lights, 10 Pack 30 LED Fence',
    price: 65.9981,
    link: 'www.amazon.com/ROSHWEY-Outdoor-Stainless-Waterproof-Security/dp/B07WPHVR83/ref=sr_1_11?keywords=fence+post&qid=1683072998&sr=8-11'       
  },
  {
    name: 'Post Buddy Pack of 4 Easy Fence Post Repair (to fi',
    price: 39.95,
    link: 'www.amazon.com/Post-Buddy-Repair-Stakes-Broken/dp/B01LZQBE89/ref=sr_1_12?keywords=fence+post&qid=1683072998&sr=8-12'
  },
  {
    name: 'Dynaming 8 Pack Solar Post Lights, Outdoor Decorat',
    price: 54.99,
    link: 'www.amazon.com/Dynaming-Outdoor-Decorative-Brightness-Lighting/dp/B09N6ZCFJN/ref=sr_1_13?keywords=fence+post&qid=1683072998&sr=8-13'     
  },
  {
    name: 'SUNFACESolar Deck Lights Fence Post Lights Outdoor',
    price: 36.8949,
    link: 'www.amazon.com/Lights-Outdoor-Lighting-Garden-Decorative/dp/B07ZNGTWT9/ref=sr_1_14?keywords=fence+post&qid=1683072998&sr=8-14'
  },
  {
    name: 'AILBTON 4 Pack 1.3 Ft Suspension Outdoor String Li',
    price: 34.99,
    link: 'www.amazon.com/AILBTON-Suspension-Outdoor-Mounting-Backyard/dp/B0BRBFKY7B/ref=sr_1_15?keywords=fence+post&qid=1683072998&sr=8-15'        
  },
  {
    name: 'MTB Fence Post Driver with Handle, 12LB Black Iron',
    price: 39.9,
    link: 'www.amazon.com/MTB-Driver-Handle-Black-Partner/dp/B01ND3ZIBL/ref=sr_1_16?keywords=fence+post&qid=1683072998&sr=8-16'
  },
  {
    name: 'Eyrosa 5.3" Hanging Plant Hooks, 6 Pack Hanging Ba',
    price: 6.999,
    link: 'www.amazon.com/Eyrosa-Hanging-Bracket-Hangers-Outdoor/dp/B0BV2V8NXN/ref=sr_1_17?keywords=fence+post&qid=1683072998&sr=8-17'
  },
  {
    name: 'TonGass (24-Pack) 4x4 (3 5/8") Fence Post Caps - M',
    price: 22.9929,
    link: 'www.amazon.com/24-Pack-Fence-Post-Plastic-Caps/dp/B091C372L6/ref=sr_1_18?keywords=fence+post&qid=1683072998&sr=8-18'
  },
  {
    name: 'NQN 100 Pcs Black Electric Fence Insulator Screw-i',
    price: 17.9952,
    link: 'www.amazon.com/NQN-Insulator-Accessories-Husbandry-Electronic/dp/B09CKT36BC/ref=sr_1_19?keywords=fence+post&qid=1683072998&sr=8-19'      
  },
  {
    name: 'BOTINDO Garden Stakes 48 Inches Sturdy Green Plant',
    price: 25.95,
    link: 'www.amazon.com/BOTINDO-Garden-Support-Tomatoes-Cucumber/dp/B08MVTR4WM/ref=sr_1_20?keywords=fence+post&qid=1683072998&sr=8-20'
  },
  {
    name: 'Mail Boss 7121, Black In-Ground Mounting Post, 43 ',
    price: 79.99,
    link: 'www.amazon.com/Mail-Boss-7121-Ground-Mounting/dp/B000VYL1P8/ref=sr_1_21?keywords=fence+post&qid=1683072998&sr=8-21'
  },
  {
    name: 'Zareba TPWC100 T-Post Wire Clips 100 Count (Pack o',
    price: 13.4914,
    link: 'www.amazon.com/Zareba-TPWC100-T-Post-Wire-Clips/dp/B00GBVCF64/ref=sr_1_22?keywords=fence+post&qid=1683072998&sr=8-22'
  },
  {
    name: 'BISupply 4 FT Safety Fence – 100 FT Plastic Fencin',
    price: 45.99,
    link: 'www.amazon.com/BISupply-FT-Safety-Fence-Construction/dp/B07L6QG867/ref=sr_1_23?keywords=fence+post&qid=1683072998&sr=8-23'
  },
  {
    name: 'SIEDiNLAR Solar Post Lights Outdoor 2 Modes LED De',
    price: 21.99,
    link: 'www.amazon.com/Siedinlar-Lights-Outdoor-Decoration-Lighting/dp/B085RKZHT8/ref=sr_1_24?keywords=fence+post&qid=1683072998&sr=8-24'        
  },
  {
    name: 'Davinci Lighting Renaissance Solar Outdoor Post Ca',
    price: 39.99,
    link: 'www.amazon.com/Davinci-Renaissance-Solar-Post-Lights/dp/B087Z95MWY/ref=sr_1_25?keywords=fence+post&qid=1683072998&sr=8-25'
  },
  {
    name: 'Nuvo Iron US-PCP12BLK US-6x6 Eazy Pyramid Cap, 6" ',
    price: 6.428,
    link: 'www.amazon.com/Nuvo-Iron-US-PCP12BLK-Pyramid-retailers/dp/B08TVJD28C/ref=sr_1_26?keywords=fence+post&qid=1683072998&sr=8-26'
  },
  {
    name: 'Otdair Solar Fence Lights Outdoor, 8 Pack LED Fenc',
    price: 29.99,
    link: 'www.amazon.com/Otdair-Lights-Outdoor-Waterproof-Pathway/dp/B08XVY79CY/ref=sr_1_27?keywords=fence+post&qid=1683072998&sr=8-27'
  },
  {
    name: 'Davinci Lighting Edison Solar Outdoor Post Cap Lig',
    price: 24.99,
    link: 'www.amazon.com/Davinci-Lighting-Edison-Outdoor-Lights/dp/B08R4L3KRW/ref=sr_1_28?keywords=fence+post&qid=1683072998&sr=8-28'
  },
  {
    name: 'Zippity Outdoor Products ZP19028 Unassembled Madis',
    price: 89.8315,
    link: 'www.amazon.com/Zippity-Outdoor-Products-ZP19028-Unassembled/dp/B07DHT2WZK/ref=sr_1_29?keywords=fence+post&qid=1683072998&sr=8-29'        
  },
  {
    name: 'MTB Fence Post Anchor Ground Spike Metal Black Pow',
    price: 55.0059,
    link: 'www.amazon.com/MTB-Anchor-Ground-Powder-Coated/dp/B072BMZB8G/ref=sr_1_30?keywords=fence+post&qid=1683072998&sr=8-30'
  },
  {
    name: 'HILLMASTER Heavy Duty Self-Locking Gate Latch for ',
    price: 17.9918,
    link: 'www.amazon.com/HILLMASTER-Self-Locking-Automatic-Gravity-Hardware/dp/B08GK6XKT7/ref=sr_1_31?keywords=fence+post&qid=1683072998&sr=8-31'  
  },
  {
    name: 'VEVOR 4 x 4 Post Base 5 PC, Deck Post Base Inner S',
    price: 32.7939,
    link: 'www.amazon.com/VEVOR-Post-Base-PC-Powder-Coated/dp/B09J2PJ1WD/ref=sr_1_32?keywords=fence+post&qid=1683072998&sr=8-32'
  },
  {
    name: 'VOLISUN Solar Post Cap Lights,6Pack Outdoor Fence ',
    price: 43.99,
    link: 'www.amazon.com/VOLISUN-Lights-Outdoor-Powered-Waterproof/dp/B0BMLHVWYG/ref=sr_1_33?keywords=fence+post&qid=1683072998&sr=8-33'
  },
  {
    name: 'Fi-Shock P-30G 30 Inch Garden Fence Post, Ideal fo',
    price: 59.46,
    link: 'www.amazon.com/Fi-Shock-P-30G-Green-Garden-Fence/dp/B010RJ7WAY/ref=sr_1_34?keywords=fence+post&qid=1683072998&sr=8-34'
  },
  {
    name: 'Zareba A-48B 4-Inch Step-In Fence Post - Electric ',
    price: 134.99,
    link: 'www.amazon.com/Fi-Shock-48B-Black-Step-Fence/dp/B010RJ7Z7O/ref=sr_1_35?keywords=fence+post&qid=1683072998&sr=8-35'
  },
  {
    name: 'GKOLED 6-Pack 4" x 4" Pyramid White PVC Vinyl Post',
    price: 12.99,
    link: 'www.amazon.com/GKOLED-6-Pack-White-Fences-Mailbox/dp/B08LN8SMXF/ref=sr_1_36?keywords=fence+post&qid=1683072998&sr=8-36'
  },
  {
    name: 'Windscreen4less Heavy Duty Privacy Screen Fence in',
    price: 45.98,
    link: 'www.amazon.com/Windscreen4less-Privacy-Screen-Grommets-Warranty/dp/B00CEIKEP2/ref=sr_1_37?keywords=fence+post&qid=1683072998&sr=8-37'    
  },
  {
    name: 'DOESLAG Solar Fence Lights, 8 Pack Deck Lights Wat',
    price: 29.9949,
    link: 'www.amazon.com/DOESLAG-Lights-Waterproof-Outdoor-Backyard/dp/B0B2NMPHQ7/ref=sr_1_38?keywords=fence+post&qid=1683072998&sr=8-38'
  },
  {
    name: 'Cat’s Claw Fasteners 2 inch for Softwoods 170 Coun',
    price: 60.5069,
    link: 'www.amazon.com/Cats-Claw-Fasteners-Softwoods-Replaces/dp/B0876HGV6Y/ref=sr_1_39?keywords=fence+post&qid=1683072998&sr=8-39'
  },
  {
    name: 'Self-Locking Gate Latch - Post Mount Automatic Gra',
    price: 19.9922,
    link: 'www.amazon.com/Self-Locking-Automatic-Gravity-Lever-Fence/dp/B07F8LRVB7/ref=sr_1_40?keywords=fence+post&qid=1683072998&sr=8-40'
  },
  {
    name: `Starkline Electric Netting (42" x 164') Electric F`,
    price: 179.99,
    link: 'www.amazon.com/Electric-Sheep-Goat-Netting-Green/dp/B07S3886XZ/ref=sr_1_48?keywords=fence+post&qid=1683072998&sr=8-48'
  }];

  const width = window.innerWidth;
  const height = window.innerHeight;
  const colors = {
      blue : "#325ca8",
      orange: "#ebd834"
  };

  



  const generateChart = data => {
    const bubble = data => d3.pack().size([width, height]).padding(2)(d3.hierarchy({ children: data }).sum(d => d.price));

    const svg = d3.select('#bubble-chart').style('width', width).style('height', height);
    
    const root = bubble(data);
    const tooltip = d3.select('.tooltip');

    const node = svg.selectAll().data(root.children).enter().append('g').attr('transform', `translate(${width / 2}, ${height / 2})`);
    
    const circle = node.append('circle').style('fill', d => colors.blue).on('mouseover', function (e, d) {
      tooltip.select('a').attr('href', d.data.link).text(d.data.link);
      tooltip.style('visibility', 'visible');
     d3.select(this).style('stroke', '#222');
  })
  .on('mousemove', e => tooltip.style('top', `${e.pageY}px`).style('left', `${e.pageX + 10}px`))
  .on('mouseout', function () {d3.select(this).style('stroke', 'none');
      return tooltip.style('visibility', 'hidden');
  })
  .on('click', (e, d) => window.open(d.data.link));
  
  const label = node.append('text').style('fill', d => colors.orange).attr('dy', 2).text(d => d.data.name.substring(0, d.r / 3));
 

    node.transition().ease(d3.easeExpInOut).duration(1000).attr('transform', d => `translate(${d.x}, ${d.y})`);
     
    circle.transition().ease(d3.easeExpInOut).duration(1000).attr('r', d => d.r);
     
    label.transition().delay(700).ease(d3.easeExpInOut).duration(1000).style('opacity', 1)


};

(async () => {
    generateChart(data);
})();