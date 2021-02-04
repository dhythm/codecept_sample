Feature("Sample Test");

Scenario("Test for Web browsing", ({ I }) => {
  I.amOnPage("https://google.com/");
  I.fillField("検索", "yahoo");
  I.click("Google 検索");
  I.see("Yahoo! JAPAN");
  I.click("Yahoo! JAPAN");
  I.see("天気・災害");
  I.click("天気・災害");
});
