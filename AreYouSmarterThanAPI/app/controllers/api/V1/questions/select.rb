class Select < Methods

    def generate

        createQuestion(["select"])

        @comparison.each do |comparison_type|           # populate the choices, then shuffle them
            @choices << (eval "@array.#{@method} { |x| x #{comparison_type} #{@array_selection} }")
        end.shuffle

        @question = "array.#{@method} { |x| x #{@comparison_selection} #{@array_selection} }"
        @wrong_answer = eval "array.#{@method} { |x| x #{@comparison_rejection} #{@array_selection} }"

        answers

    end

end
