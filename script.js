// القائمة الجانبية
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('hidden');
  }

  // فتح الأقسام
  function openSection(id) {
    const sections = document.querySelectorAll('.section-box');
      sections.forEach(sec => sec.style.display = 'none');
        document.getElementById(id).style.display = 'block';
        }

        // الأكوردين للقوانين
        let rules = [
          {title: "القوانين العامة", content: "يمنع السب - احترام الجميع - الالتزام بالإدارة", addedBy: "Admin", date: new Date()},
            {title: "قوانين RP", content: "Meta - يمنع Power Gaming - يمنع Fail RP", addedBy: "Admin", date: new Date()}
            ];

            function renderRules() {
              const container = document.getElementById('accordionRules');
                container.innerHTML = '';
                  rules.forEach(rule => {
                      const item = document.createElement('div');
                          item.classList.add('accordion-item');
                              item.innerHTML = `
                                    <div class="accordion-header" onclick="toggleAccordion(this)">
                                            <div class="accordion-logo">GL</div>
                                                    <span>${rule.title}</span>
                                                            <span class="plus">+</span>
                                                                    <span class="date" style="font-size:12px;margin-left:auto;">${rule.date.toLocaleDateString()}</span>
                                                                          </div>
                                                                                <div class="accordion-body">
                                                                                        <p>${rule.content}</p>
                                                                                              </div>
                                                                                                  `;
                                                                                                      container.appendChild(item);
                                                                                                        });
                                                                                                        }

                                                                                                        function toggleAccordion(header) {
                                                                                                          const body = header.nextElementSibling;
                                                                                                            body.style.display = body.style.display === 'block' ? 'none' : 'block';
                                                                                                            }

                                                                                                            // إضافة قانون جديد
                                                                                                            function addRule() {
                                                                                                              const title = document.getElementById('newRuleTitle').value;
                                                                                                                const content = document.getElementById('newRuleContent').value;
                                                                                                                  if(title && content){
                                                                                                                      rules.push({title, content, addedBy:"Admin", date: new Date()});
                                                                                                                          renderRules();
                                                                                                                              document.getElementById('newRuleTitle').value = '';
                                                                                                                                  document.getElementById('newRuleContent').value = '';
                                                                                                                                    } else {
                                                                                                                                        alert("يرجى كتابة اسم القانون ومحتواه");
                                                                                                                                          }
                                                                                                                                          }

                                                                                                                                          // تحميل القوانين عند بداية الصفحة
                                                                                                                                          window.addEventListener('DOMContentLoaded', () => {
                                                                                                                                            renderRules();
                                                                                                                                            });